"use server";

import prisma from "@/lib/prismadb";
import { cookies } from "next/headers";

export async function GetLoginUser() {
  try {
    const getCookie = await cookies();
    const getValue = getCookie.get("session")?.value;
    const user = getValue ? JSON.parse(getValue) : null;

    if (!user.email) {
      return { message: "Unauthorized", status: 401, success: false };
    }

    const User = await prisma.user.findUnique({
        omit:{
            password:true
        },
      where: {
        email: user.email,
      },
    });
    return { success: true, message: "User found", User };
  } catch (error) {
    return {
      error: error || "Internal server error",
      status: 500,
      success: false,
    };
  }
}
