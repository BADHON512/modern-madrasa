"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismadb";

export async function DeleteStudent(studentId: string) {
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: studentId,
      },
    });
    if (!student) {
      return { error: "Student not found", statusCode: 404 };
    }
    const avatarData =
      student.avatar && typeof student.avatar === "string"
        ? JSON.parse(student.avatar)
        : student.avatar;

    // If URLs are different, delete the old avatar first
    if (avatarData?.public_id) {
      await cloudinary.uploader.destroy(avatarData.public_id);
    }

    await prisma.student.delete({
      where: {
        id: studentId,
      },
    });
    return { message: "Student deleted successfully", statusCode: 200 };
  } catch (error) {
    return { error: error || "Internal server error", statusCode: 500 };
  }
}
