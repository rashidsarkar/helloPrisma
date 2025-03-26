import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //offset pagination
  // const offsetData = await prisma.post.findMany({
  //   skip: 5,
  //   take: 2,
  // });
  // console.log(offsetData);
  //cursor based pagination
  // const cursorData = await prisma.post.findMany({
  //   skip: 5,
  //   take: 2,
  //   cursor: {
  //     id: 21,
  //   },
  // });
  // console.log(cursorData);
  // sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
    skip: 10,
    take: 2,

    where: {
      title: {
        contains: "Post Title",
      },
    },
  });
  console.log(sortedData);
};

main();
