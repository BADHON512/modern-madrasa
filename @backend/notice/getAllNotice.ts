"use server";

import prisma from "@/lib/prismadb";

export async function getAllNotices() {
  try {
    const allNotice = await prisma.notice.findMany();
    return { statusCode: 200, allNotice };
  } catch (error) {
    return { error: error || "Internal server error", statusCode: 500 };
  }
}
