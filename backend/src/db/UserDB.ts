import { PrismaClient } from '@prisma/client'

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
  getUserByEmail(email: string) {
    return prisma.user.findFirst({
      where: {
        email
      }
    });
  }
} as const;
