import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@ph.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(createUser);
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: " This is a bio",
  //     userId: 1,
  //   },
  // });
  const createCategory = await prisma.category.create({
    data: {
      name: "Sof-Eng",
    },
  });
  console.log(createCategory);
};
main();
