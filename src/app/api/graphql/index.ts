import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { userTypeDefs } from './TypeDefs/UsersTypeDefs';
import { userResolvers } from './Resolvers/UserResolvers';
// import { adminTypeDefs } from './admins/typeDefs';
// import { adminResolvers } from './admins/resolvers';

export const typeDefs = mergeTypeDefs([
  `
  type Query
  type Mutation
  `,
  userTypeDefs,
//   adminTypeDefs,
]);

export const resolvers = mergeResolvers([
  userResolvers,
//   adminResolvers,
]);
