import { prisma } from '@/libs/Prisma/Prisma-Client';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs, resolvers } from '@/app/api/graphql';


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
  context: () => ({ prisma }),
  graphqlEndpoint: '/api/graphql',
});

export { yoga as GET, yoga as POST };
