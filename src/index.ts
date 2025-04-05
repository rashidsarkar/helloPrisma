import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const aggregates = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(minAge);
};
aggregates();
