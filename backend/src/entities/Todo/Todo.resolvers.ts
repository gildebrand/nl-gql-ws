import { Resolvers } from '../../generated/graphql';

export const resolvers: Resolvers =  {
  Query: {
    getTodos(_, __, {todoDb}) {
      return todoDb.getTodos();
    }
  },
  Todo: {
    user(todo, __, {userDb}) {
      return userDb.getUserById(todo.authorId);
    }
  }
}
