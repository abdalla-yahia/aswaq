import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { userSchemas } from './Schemas/UsersShcemas';
import { userResolvers } from './Resolvers/UserResolvers';
import { AddressResolvers } from './Resolvers/AddressResolvers';
import { AddressSchemas } from './Schemas/AddressSchemas';
import {categorySchema} from './Schemas/CategorySchemas';
import {CategoryResolvers} from './Resolvers/CategoryResolvers';
import { brandSchema } from './Schemas/BrandSchemas';
import { BrandResolvers } from './Resolvers/BrandResolvers';


export const typeDefs = mergeTypeDefs([
  `
  type Query
  type Mutation
  `,
  userSchemas,
  AddressSchemas,
  categorySchema,
  brandSchema,
]);

export const resolvers = mergeResolvers([
  userResolvers,
  AddressResolvers,
  CategoryResolvers,
  BrandResolvers,
]);
