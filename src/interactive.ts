import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (transcationClient) => {
    // query 1
    const getAllpost = await transcationClient.post.findMany({
      where: {
        published: true,
      },
    });
    // query 2
    const countUser = await transcationClient.user.count();
    // query 3
    const updatedUser = await transcationClient.user.update({
      where: {
        id: 5400,
      },
      data: {
        role: "admin",
      },
    });
    return {
      getAllpost,
      countUser,
      updatedUser,
    };
  });
  console.log(result);
};
interactiveTransaction();
