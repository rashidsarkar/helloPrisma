import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["published"],
  });
  console.log(groupPost);
};
groupBy();
