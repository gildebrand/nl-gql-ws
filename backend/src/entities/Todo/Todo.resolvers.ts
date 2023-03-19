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
  Mutation: {
    async deleteTodo(_, {todoId}, {todoDb}) {
      await todoDb.removeTodo(todoId);
      return true;
    },
    createTodo(_, {title}, {todoDb, user}) {
      return todoDb.createTodo({
        title,
        done: false,
        authorId: user.id
      })
    },
    async updateTodo(_, {todoId, update: {title, done}}, {todoDb}) {
      return todoDb.updateTodo(todoId, {
        title,
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
