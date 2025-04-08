import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const post = await prisma.$queryRaw`SELECT * FROM posts`;
  console.log(post);
};
rawQuery();
