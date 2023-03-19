import { Resolvers } from '../../generated/graphql';

export const resolvers: Resolvers =  {
  Query: {
    getTodos(_, {filter: {authorId, done}}, {todoDb}) {
      return todoDb.getTodos({
        authorId,
        done
      });
    }
  },
  Todo: {
    author(todo, _, {userDb}) {
      return userDb.getUserById(todo.authorId);
    }
  }
}
