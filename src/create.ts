import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  const createData = await prisma.post.create({
    data: {
      title: " Post 99",
      content: "This is the content of post 1",
      authorName: " John",
    },
  });
  console.log(createData);
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: " Post 1",
        content: "This is the content of post 1",
        authorName: " John",
      },
      {
        title: " Post 2",
        content: "This is the content of post 2",
        authorName: " Zarin",
      },
      {
        title: " Post 3",
        content: "This is the content of post 3",
        authorName: " Rock",
      },
    ],
  });
  console.log(createMany);
};
main();
