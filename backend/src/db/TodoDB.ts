import { PrismaClient, Todo } from '@prisma/client'

const prisma = new PrismaClient()

export const TodoDB = {
  getTodos({
    authorId = null
  }: {
    authorId?: number | null;
  } = {}) {
    return prisma.todo.findMany({
      where: {
        ...(authorId !== null && {authorId})
      }
    });
  },
  createTodo(todo: Todo) {
    return prisma.todo.create({data: todo});
  }
} as const;
