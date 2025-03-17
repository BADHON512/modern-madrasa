"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismadb";
import bcrypt from "bcryptjs";

type Props = {
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string; // This should be a file or base64
};

export async function SignUpAdmin({
  email,
  password,
  name,
  role,
  avatar,
}: Props) {
  try {
    if (role === "super_admin") {
      const existingSuperAdmin = await prisma.user.findFirst({
        where: { role: "super_admin" },
      });

      if (existingSuperAdmin) {
        return { message: "Super Admin already exists", statusCode: 400 };
      }
    }


    const existAdmin = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existAdmin) {
      return { error: "Admin already exist", statusCode: 400 };
    }
    // 🔹 পাসওয়ার্ড হ্যাশ করা
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Cloudinary-তে ইমেজ আপলোড করা
    const image = await cloudinary.uploader.upload(avatar, {
      folder: "madrash",
    });
    const generateRegistrationNumber = () =>
      Math.floor(10000 + Math.random() * 90000).toString();

    const User = await prisma.user.create({
      data: {
        avatar: {
          url: image.secure_url,
          public_id: image.public_id,
        },
        name,
        email,
        role,
        password: hashedPassword,
        registrationNumber: generateRegistrationNumber(),
      },
    });

    return { message: "SignUp successfully", User };
  } catch (error) {
    console.error("Signup Error:", error);
    return { error: "Internal server error", statusCode: 500 };
  }
}
