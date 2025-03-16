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

export async function SignUpAdmin({ email, password, name, avatar }: Props) {
  try {

  const existAdmin= await prisma.admin.findUnique({
    where:{
      email:email
    }
  })
  if(existAdmin){
    return {message:"Admin already exist", statusCode:400}
  }
    // 🔹 পাসওয়ার্ড হ্যাশ করা
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Cloudinary-তে ইমেজ আপলোড করা
    const image = await cloudinary.uploader.upload(avatar, {
      folder: "madrash",
    });

    // 🔹 Admin তৈরি করা
    const admin = await prisma.admin.create({
        data: {
          avatar: {
            url: image.secure_url,
            public_id: image.public_id,
          },
          name,
          email,
          password:hashedPassword,
        },
      });

    return { message: "SignUp successfully", admin };
  } catch (error) {
    console.error("Signup Error:", error);
    return { error: "Internal server error", statusCode: 500 };
  }
}
