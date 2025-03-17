"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismadb";
import { cookies } from "next/headers";

type Props = {
  className: string;
  name: string;
  guardianName: string;
  contact: string;
  address: string;
  avatar?: string;  // Make avatar optional
};

export async function UpdateProfile({
  className,
  name,
  guardianName,
  contact,
  address,
  avatar,
}: Props) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    const userid: string = JSON.parse(session!).id;

    if (!userid) {
      return { error: "unauthorized", statusCode: 401 };
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: userid },
    });

    if (!existingUser) {
      return { error: "user not found", statusCode: 404 };
    }

    const avatarData = existingUser.avatar && typeof existingUser.avatar === "string"
      ? JSON.parse(existingUser.avatar)
      : existingUser.avatar;

    // Check if avatar URL is the same
    if (avatar && avatarData?.url !== avatar) {
      // If URLs are different, delete the old avatar first
      if (avatarData?.public_id) {
        try {
          await cloudinary.uploader.destroy(avatarData.public_id);
        } catch (error) {
          console.log("Error deleting old avatar:", error);
        }
      }

      // Upload new avatar image
      const image = await cloudinary.uploader.upload(avatar, {
        folder: "profile",
      });

      // Update user with the new avatar
      const updateUser = await prisma.user.update({
        where: {
          id: userid,
        },
        data: {
          avatar: {
            url: image.secure_url,
            public_id: image.public_id,
          },
          className: className,
          name: name,
          guardianName: guardianName,
          contact: contact,
          address: address,
        },
      });

      return {
        message: "User profile updated successfully",
        statusCode: 200,
        updateUser,
      };
    }

    // If avatar is the same, only update other details
    const updateUser = await prisma.user.update({
      where: {
        id: userid,
      },
      data: {
        className: className,
        name: name,
        guardianName: guardianName,
        contact: contact,
        address: address,
      },
    });

    return {
      message: "User profile updated successfully",
      statusCode: 200,
      updateUser,
    };
  } catch (error: any) {
    console.log(error);
    return { error: "internal server error", statusCode: 500 };
  }
}
