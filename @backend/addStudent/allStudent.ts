"use server"

import prisma from "@/lib/prismadb"


export async function AllStudents() {
    try {
        const students=await prisma.student.findMany()
        return {students,statusCode:200}
    } catch (error) {
        return { error: error || "Internal server error", statusCode: 500 }
    }
}