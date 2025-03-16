"use server";
import { cookies } from "next/headers";

import bcrypt from "bcryptjs";
import prisma from "@/lib/prismadb";

export async function LoginAdmin(email: string, password: string) {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email: email },
    });

    if (!admin) {
      return { error: "User not found", status: 404, success: false };
    }

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password as string
    );
    if (!passwordMatch) {
      return { error: "Invalid password", status: 401, success: false };
    }

    // ✅ `cookies()` কে await করা হয়েছে
    const cookieStore = await cookies();

    const data={
      id:admin.id,
      email:admin.email,
      role:admin.role
    }
    cookieStore.set("session", JSON.stringify(data) ,{
      httpOnly: true,
      sameSite: "lax",
      maxAge: 3600 * 24 * 7,
      path: "/",
    });

    return { success: true, message: "Login successful" };
  } catch (error) {
    return {
      error: error || "Internal server error",
      status: 500,
      success: false,
    };
  }
}
