import { TodoDB } from './db/TodoDB';
import { UserDB } from './db/UserDB';

export type Context = {
  todoDb: typeof TodoDB;
  userDb: typeof UserDB;
}

export const createContext = (): Context => {
  return {
    todoDb: TodoDB,
    userDb: UserDB
  }
}
