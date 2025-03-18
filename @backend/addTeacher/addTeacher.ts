"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismadb";

type Props = {
  name: string;
  contact?: string;
  avatar: string; // অথবা Prisma.JsonValue
  gender?: string;
  address?: string;
  qualification?: string;
};

export async function AddTeacher({
  name,
  contact,
  avatar,
  gender,
  address,
  qualification,
}: Props) {
  try {
    const image = await cloudinary.uploader.upload(avatar, {
      folder: "teacher",
    });

    const teacher = await prisma.teacher.create({
      data: {
        name,
        contact,
        avatar: {
          url: image.secure_url,
          public_id: image.public_id,
        },
        gender,
        address,
        qualification,
      },
    });

    return { statusCode:200, teacher, message: "Teacher added successful", };
  } catch (error) {
    console.log(error)
    return { error: error || "Internal server error", statusCode: 500 };
  }
}
