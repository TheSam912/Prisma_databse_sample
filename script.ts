import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //-------------------------Create a new User record-------------------------
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Alice",
  //       email: "alice@prisma.io",
  //     },
  //   });
  //   console.log(user);
  //-------------------------Create a new User record-------------------------
  //
  // -------------------------Retrieve all User records-------------------------
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  // -------------------------Retrieve all User records-------------------------
  //
  // -------------------------Explore relation queries with Prisma Client-------------------------
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Bob",
  //       email: "bob@prisma.io",
  //       posts: {
  //         create: {
  //           title: "Hello World",
  //         },
  //       },
  //     },
  //   });
  //   console.log(user);
  // -------------------------Explore relation queries with Prisma Client-------------------------
  //
  // --------------------------Retrieve all User and Post records------------------------
  //   const usersWithPosts = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //     },
  //   });
  //   console.dir(usersWithPosts, { depth: null });
  // --------------------------Retrieve all User and Post records------------------------
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
