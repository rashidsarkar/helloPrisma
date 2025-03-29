import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const relationalQueries = async () => {
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.log(publishedPostUsers);
};
relationalQueries();
