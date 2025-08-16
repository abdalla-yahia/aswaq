import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs, resolvers } from '@/app/api/graphql';
import { prisma } from '@/libs/Prisma/Prisma-Client';
import { PrismaClient } from '@prisma/client';

 function makeYoga() {
  
  const resHeaders = new Headers();
  const yoga = createYoga<{
    req: Request;
    prisma: PrismaClient;
    resHeaders: Headers;
  }>({
    schema: createSchema<{
    req: Request;
    prisma: PrismaClient;
    resHeaders: Headers;
  }>({
      typeDefs,
      resolvers,
    }),
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Request, Response },
    // ❌ اقفل GraphiQL في production
    graphiql: process.env.NODE_ENV !== "production",
    // ❌ اقفل introspection في production
    maskedErrors: process.env.NODE_ENV === "production",
    context: ({ request }) => ({
      req: request,
      prisma,
      resHeaders
    }),
  });

  return { yoga, resHeaders };
}

export async function GET(request: Request) {
  const { yoga, resHeaders } = makeYoga();
  const response = await yoga.fetch(request);

  resHeaders.forEach((value, key) => {
    response.headers.append(key, value);
  });

  return response;
}

export async function POST(request: Request) {
  const { yoga, resHeaders } = makeYoga();
  const response = await yoga.fetch(request);

  resHeaders.forEach((value, key) => {
    response.headers.append(key, value);
  });

  return response;
}
