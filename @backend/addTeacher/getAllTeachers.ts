"use server"

import prisma from "@/lib/prismadb";

export async function getAllTeachers() {
    try {
       const allTeachers=await prisma.teacher.findMany()
       return { statusCode:200, allTeachers, }; 
    } catch (error) {
        return { error: error || "Internal server error", statusCode: 500 };
    }
}