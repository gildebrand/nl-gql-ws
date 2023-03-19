import { Resolvers } from '../../generated/graphql';

export const resolvers: Resolvers =  {
  Query: {
    getTodos(_, __, {todoDb}) {
      return todoDb.getTodos();
    }
  },
  Todo: {
    author(todo, _, {userDb}) {
      return userDb.getUserById(todo.authorId);
    }
  }
}
