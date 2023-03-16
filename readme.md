# GraphQL workshop
Hello fellow boid 👋
Below you should find the relevant information necessary to get up and running with the materials for this workshop.

The project is organized as a monorepo with a backend and a frontend. The backend is based on Node, Apollo Server, Codegen and Prisma (the latter is configured and ready to go). The frontend is based on React, Apollo Client and Codegen.

## Getting started

### Backend
Simply run `yarn install` followed by `yarn dev` in the `backend` folder to get started. This will install all dependencies, create a local SQLite database, seed the database with some data, generate type information for our GraphQL schemas, and launch the backend in watch mode on `http://localhost:5000`.

When you do changes to _.ts_ files in the backend it will automatically reload within a couple of seconds. When you do changes to _.graphql_ files in the backend type information will automatically be generated and the backend will reload.
