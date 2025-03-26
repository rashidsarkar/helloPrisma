import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  // find all
  const getAllFromDb = await prisma.post.findMany();
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  const findUnic = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  console.log({ findFirst });
};
main();
