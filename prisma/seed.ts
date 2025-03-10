import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: "مبینا یوسفیان",
    username: "mysf",
    email: "email@gmail.com",
    password: "123",
  },
];

export async function main() {
  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

main().then(() => console.log("Done!"));
