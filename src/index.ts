import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});
prisma.$on("query", (e) => {
  console.log(e.query);
  // console.log("query:", e.query);
  console.log("params:", e.params);
  console.log("duration:", e.duration);
});
const main = async () => {
  const getAllPost = await prisma.post.findMany({});
  // console.log(getAllPost);
};
main();
