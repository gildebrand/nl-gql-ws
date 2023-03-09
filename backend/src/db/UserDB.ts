import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export const UserDB = {
  getUsers() {
    return prisma.user.findMany();
  },
  getUserById(id: number) {
    return prisma.user.findFirst({
      where: {
        id
      }
    });
  },
} as const;
