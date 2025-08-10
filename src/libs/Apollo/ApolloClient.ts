import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: '/api/graphql',
  credentials: 'include', // ضروري عشان الكوكي يروح مع الطلب
  cache: new InMemoryCache(),
});
