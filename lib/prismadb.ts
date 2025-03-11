import { PrismaClient } from "@prisma/client";



const prisma= global.prismaDB|| new PrismaClient();

if(process.env.NODE_ENV !== 'production') global.prismaDB=prisma;


export default prisma;