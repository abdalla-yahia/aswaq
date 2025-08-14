import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { userSchemas } from './Schemas/UsersShcemas';
import { userResolvers } from './Resolvers/UserResolvers';
import { AddressResolvers } from './Resolvers/AddressResolvers';
import { AddressSchemas } from './Schemas/AddressSchemas';
// import { adminTypeDefs } from './admins/typeDefs';
// import { adminResolvers } from './admins/resolvers';

export const typeDefs = mergeTypeDefs([
  `
  type Query
  type Mutation
  `,
  userSchemas,
  AddressSchemas
//   adminTypeDefs,
]);

export const resolvers = mergeResolvers([
  userResolvers,
  AddressResolvers
//   adminResolvers,
]);
