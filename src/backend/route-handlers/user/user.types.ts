import { Business, StructuredSyndicate, UnstructuredSyndicate } from '@prisma/client';

export interface IGetUserResponse {
  name: string;
  isOnboarded: boolean;
  isBusiness: boolean;
  isSyndicate: boolean;
  businesses: Business[];
  syndicates: (StructuredSyndicate | UnstructuredSyndicate)[];
}
