"use server";

import prisma from "@/lib/prismadb";

export async function CreateNotice(title: string, content: string) {
  try {
    if (!title || !content) {
      return { error: "All fields are required", statusCode: 400 };
    }
    const notice = await prisma.notice.create({
      data: {
        title,
        content,
      },
    });
    return { statusCode: 200, notice, message: "Notice created successful" };
  } catch (error) {
    return { error: error || "Internal server error", statusCode: 500 };
  }
}
