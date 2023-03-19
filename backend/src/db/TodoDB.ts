import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const TodoDB = {
  getTodos({
    authorId = null,
    done = null,
  }: {
    authorId?: number | null;
    done?: boolean | null;
  } = {}) {
    return prisma.todo.findMany({
      where: {
        ...(authorId !== null && {authorId}),
        ...(done !== null && {done}),
      }
    });
  },
  createTodo(data: Prisma.TodoUncheckedCreateInput) {
    return prisma.todo.create({data});
  },
  updateTodo(id: number, data: Prisma.TodoUpdateInput) {
    return prisma.todo.update({
      where: {
        id
      },
      data,
    });
  },
  removeTodo(id: number) {
    return prisma.todo.delete({
      where: {
        id
      }
    });
  }
} as const;
