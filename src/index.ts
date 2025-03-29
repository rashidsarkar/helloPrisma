import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  const createPost = await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is a sample post",
      authorId: 1,
      PostCategory: {
        create: {
          categoryId: 3,
          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // },
        },
      },
    },
    include: {
      PostCategory: true,
    },
  });
  console.log(createPost);
};
main();
