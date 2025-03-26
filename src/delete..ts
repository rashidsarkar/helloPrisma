import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  const deleteSingle = await prisma.post.delete({
    where: {
      id: 15,
    },
  });
  console.log(deleteSingle);
  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
  console.log(deleteMany);
};
main();
