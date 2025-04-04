import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

const main = async () => {
  const getAllPost = await prisma.post.findMany({});
  // console.log(getAllPost);
};
main();
