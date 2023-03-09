import { Resolvers } from '../../generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    getUsers(_, __, {userDb}) {
      return userDb.getUsers();
    },
    getUser(_, {id}, {userDb}) {
      return userDb.getUserById(id);
    }
  },
  User: {
    createdTodos(user, _, {todoDb}) {
      return todoDb.getTodos({authorId: user.id});
    }
  }
}
