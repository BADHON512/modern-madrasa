"use server";

import prisma from "@/lib/prismadb";

export async function deleteNotice(id: string) {
  try {
    if (!id) {
      return { error: "All fields are required", statusCode: 400 };
    }
    const notice = await prisma.notice.delete({
      where: {
        id: id,
      },
    });
    return { statusCode: 200, notice, message: "Notice deleted successful" };
  } catch (error) {
    return { error: error || "Internal server error", statusCode: 500 };
  }
}
