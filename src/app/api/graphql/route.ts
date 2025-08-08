// src/app/api/graphql/route.ts
import { createYoga, createSchema } from 'graphql-yoga'
import { typeDefs, resolvers } from '@/app/api/graphql'
import { prisma } from '@/libs/Prisma/Prisma-Client'

const yoga = createYoga<{ req: Request }>({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Request, Response },

  context: ({ request }) => ({
    req: request,
    prisma,
  }),
})

export { yoga as GET, yoga as POST }
