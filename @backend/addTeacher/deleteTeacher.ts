"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismadb";

export async function DeleteTeacher(teacherId: string) {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: {
        id: teacherId,
      },
    });
    if (!teacher) {
      return { error: "Student not found", statusCode: 404 };
    }
    const avatarData =
    teacher.avatar && typeof teacher.avatar === "string"
        ? JSON.parse(teacher.avatar)
        : teacher.avatar;

    // If URLs are different, delete the old avatar first
    if (avatarData?.public_id) {
      await cloudinary.uploader.destroy(avatarData.public_id);
    }

    await prisma.teacher.delete({
      where: {
        id: teacherId,
      },
    });
    return { message: "Teacher deleted successfully", statusCode: 200 };
  } catch (error) {
    return { error: error || "Internal server error", statusCode: 500 };
  }
}
