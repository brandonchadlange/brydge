import { CreateStructuredSyndicateDTO } from "../dto/syndicate/create-structured-syndicate";
import { CreateStructuredSyndicateUserDTO } from "../dto/syndicate/create-structured-syndicate-user";
import prismaClient from "../prisma";

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

const createUnstructuredSyndicate = async () => {};

const SyndicateRepository = {
  createStructuredSyndicate,
  createStructuredSyndicateUser,
  createUnstructuredSyndicate,
};

export default SyndicateRepository;
