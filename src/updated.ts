import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 7,
    },
    data: {
      title: "Title 5",
    },
  });
  console.log(singleUpdate);
  const updatedMany = await prisma.post.updateMany({
    where: {
      title: " Post 1",
    },
    data: {
      published: true,
    },
  });
  console.log(updatedMany);
};
main();
