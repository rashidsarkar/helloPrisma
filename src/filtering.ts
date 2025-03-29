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

  console.log(orFiltering);
  console.log(andFiltering);
};
filtering();
