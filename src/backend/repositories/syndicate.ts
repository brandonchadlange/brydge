import { CreateStructuredSyndicateDTO } from "../dto/syndicate/create-structured-syndicate";
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

const createUnstructuredSyndicate = async () => {};

const SyndicateRepository = {
  createStructuredSyndicate,
  createUnstructuredSyndicate,
};

export default SyndicateRepository;
