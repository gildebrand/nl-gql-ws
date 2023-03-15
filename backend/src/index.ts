import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { createContext } from './context';
import * as dotenv from 'dotenv';

dotenv.config();

const schema = makeExecutableSchema({
  typeDefs: (() => {
    const domainTypesPath = `${__dirname}/**/*.graphql`;

    const domainTypes = loadFilesSync(domainTypesPath, {
      recursive: true,
    });

    return mergeTypeDefs(domainTypes, {
      throwOnConflict: true,
    });
  }),
  resolvers: (() => {
    const resolversPath = `${__dirname}/entities/**/*.resolvers.ts`;
    const resolvers = loadFilesSync(resolversPath, {
      recursive: true
    });

    return mergeResolvers(resolvers);
  })(),
})

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
startStandaloneServer(server, {
  listen: {port: 5000},
  context: async () => createContext(),
}).then(({url}) => {
  console.log(`🚀 Server ready at: ${url}`);
});

