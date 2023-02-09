import { CreateStructuredSyndicateDTO } from "../dto/syndicate/create-structured-syndicate";
import { CreateStructuredSyndicateUserDTO } from "../dto/syndicate/create-structured-syndicate-user";
import { CreateUnstructuredSyndicateDTO } from "../dto/syndicate/create-unstructured-syndicate";
import { CreateUnstructuredSyndicateUserDTO } from "../dto/syndicate/create-unstructured-syndicate-user";
import prismaClient from "../prisma";

const getUserStructuredSyndicates = async (userId: string) => {
  const syndicates = await prismaClient.structuredSyndicateUser.findMany({
    where: {
      userId: userId,
    },
    select: {
      structuredSyndicate: true,
    },
  });

  return syndicates.map((e) => e.structuredSyndicate);
};

const getUserUnstructuredSyndicates = async (userId: string) => {
  const syndicates = await prismaClient.unstructuredSyndicateUser.findMany({
    where: {
      userId: userId,
    },
    select: {
      unstructuredSyndicate: true,
    },
  });

  return syndicates.map((e) => e.unstructuredSyndicate);
};

const createStructuredSyndicate = async (
  data: CreateStructuredSyndicateDTO
) => {
  return prismaClient.structuredSyndicate.create({
    data: {
      registeredName: data.registeredName,
      registrationNumber: data.registrationNumber,
      syndicateHeadName: data.syndicateHeadName,
      bankVerificationNumber: data.bankVerificationNumber,
      operationalAddress: data.operationalAddress,
      state: data.state,
      utilityBillUrl: data.utilityBillUrl,
    },
  });
};

const createStructuredSyndicateUser = async (
  data: CreateStructuredSyndicateUserDTO
) => {
  return prismaClient.structuredSyndicateUser.create({
    data: {
      structuredSyndicateId: data.structuredSyndicateId,
      userId: data.userId,
    },
  });
};

const createUnstructuredSyndicate = async (
  data: CreateUnstructuredSyndicateDTO
) => {
  return prismaClient.unstructuredSyndicate.create({
    data: {
      name: data.name,
      bankVerificationNumber: data.bankVerificationNumber,
      utilityBillUrl: data.utilityBillUrl,
    },
  });
};

const createUnstructuredSyndicateUser = async (
  data: CreateUnstructuredSyndicateUserDTO
) => {
  return prismaClient.unstructuredSyndicateUser.create({
    data: {
      unstructuredSyndicateId: data.unstructuredSyndicateId,
      userId: data.userId,
    },
  });
};

const SyndicateRepository = {
  getUserStructuredSyndicates,
  getUserUnstructuredSyndicates,
  createStructuredSyndicate,
  createStructuredSyndicateUser,
  createUnstructuredSyndicate,
  createUnstructuredSyndicateUser,
};

export default SyndicateRepository;
