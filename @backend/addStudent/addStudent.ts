"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismadb";

type Props = {
  name: string;
  className: string;
  guardianName: string;
  contact: string;
  address: string;
  birthReg: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  religion: string;
  bloodGroup: string;
  emergencyContact: string;
  avatar: string;
};

export async function PostStudent({
  name,
  className,
  guardianName,
  contact,
  address,
  birthReg,
  dateOfBirth,
  gender,
  nationality,
  religion,
  bloodGroup,
  emergencyContact,
  avatar,
}: Props) {
  try {
    const existregistrationNumber = await prisma.student.findUnique({
      where: {
        registrationNumber: birthReg,
      },
    });
    if (existregistrationNumber) {
      return { error: "Student RegistrationNumber exist", statusCode: 400 };
    }

    const registration = Math.floor(100000 + Math.random() * 900000).toString();

    const image = await cloudinary.uploader.upload(avatar, {
      folder: "student",
    });
    const student = await prisma.student.create({
      data: {
        name,
        className,
        guardianName,
        contact,
        address,
        registration: registration,
        registrationNumber: birthReg,
        dateOfBirth,
        gender,
        nationality,
        religion,
        bloodGroup,
        emergencyContact,
        avatar: {
          url: image.secure_url,
          public_id: image.public_id,
        },
      },
    });

    return { message: "Student added successfully", statusCode: 200, student };
  } catch (error) {
    console.log(error)
    return { error: error || "Internal server error", statusCode: 500 };
  }
}
