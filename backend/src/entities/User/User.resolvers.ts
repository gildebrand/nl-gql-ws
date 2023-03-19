import { Resolvers } from '../../generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    getUsers(_, __, {userDb}) {
      return userDb.getUsers();
    },
    getUser(_, {id}, {userDb}) {
      return userDb.getUserById(id);
    },
    async getCurrentUser(_, __, {user}) {
      if (!user) {
        throw new Error('Current user not found');
      }

      return user;
    }
  },
  User: {
    todos(user, _, {todoDb}) {
      return todoDb.getTodos({
        authorId: user.id
      });
    }
  }
}
