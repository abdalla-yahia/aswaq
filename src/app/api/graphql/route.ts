import { createYoga, createSchema } from 'graphql-yoga'
import { typeDefs, resolvers } from '@/app/api/graphql'
import { prisma } from '@/libs/Prisma/Prisma-Client'
import { PrismaClient } from '@prisma/client'

const yoga = createYoga<{ req: Request }>({
  schema: createSchema<{ req: Request; prisma: PrismaClient }>({
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

export async function GET(request: Request) {
  return yoga.fetch(request)
}

export async function POST(request: Request) {
  return yoga.fetch(request)
}

