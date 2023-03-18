import { TodoDB } from './db/TodoDB';
import { UserDB } from './db/UserDB';
import { User } from '@prisma/client';

export type Context = {
  todoDb: typeof TodoDB;
  userDb: typeof UserDB;
  user?: User | null;
}

export const createContext = async (): Promise<Context> => {
  const user = await UserDB.getUserByEmail(process.env.CURRENT_USER_EMAIL);

  return {
    user,
    todoDb: TodoDB,
    userDb: UserDB
  }
}
