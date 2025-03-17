"use server";

import { cookies } from "next/headers";

export async function LogOut() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    return { message: "Logged out successfully", statusCode: 200 };
  } catch (error) {
    return { error: error || "Internal server error", status: 500 };
  }
}
