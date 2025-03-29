import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "rongila",
          },
        },
        { published: true },
      ],
    },
  });
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "rongila",
          },
        },
        { published: true },
      ],
    },
  });

  // console.log(orFiltering);
  // console.log(andFiltering);
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "rongila",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user1",
      },
    },
  });
  const userNameArr = ["user1", "user2", "user3"];
  const userNameByArr = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArr,
      },
    },
  });
  // console.log(userNameByArr);
  const inDepthData = await prisma.user.findMany({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          PostCategory: {
            include: { category: true },
          },
        },
      },
    },
  });
  console.log(inDepthData);
  // console.log(startWith);
};
filtering();
