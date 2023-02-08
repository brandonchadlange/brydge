import { CreateStructuredSyndicateDTO } from "../dto/syndicate/create-structured-syndicate";
import { CreateUnstructuredSyndicateDTO } from "../dto/syndicate/create-unstructured-syndicate";
import SyndicateRepository from "../repositories/syndicate";

const getUserStructuredSyndicates = async (userId: string) => {
  return SyndicateRepository.getUserStructuredSyndicates(userId);
};

const getUserUnstructuredSyndicates = async (userId: string) => {
  return SyndicateRepository.getUserUnstructuredSyndicates(userId);
};

const createStructuredSyndicate = async (
  createStructuredSyndicateDTO: CreateStructuredSyndicateDTO,
  userId: string
) => {
  const newSyndicate = await SyndicateRepository.createStructuredSyndicate(
    createStructuredSyndicateDTO
  );

  await SyndicateRepository.createStructuredSyndicateUser({
    structuredSyndicateId: newSyndicate.id,
    userId: userId,
  });

  return newSyndicate;
};

const createUnstructuredSyndicate = async (
  createUnstructuredSyndicateDTO: CreateUnstructuredSyndicateDTO,
  userId: string
) => {
  const newSyndicate = await SyndicateRepository.createUnstructuredSyndicate(
    createUnstructuredSyndicateDTO
  );

  await SyndicateRepository.createUnstructuredSyndicateUser({
    unstructuredSyndicateId: newSyndicate.id,
    userId: userId,
  });
};

const SyndicateService = {
  getUserStructuredSyndicates,
  getUserUnstructuredSyndicates,
  createStructuredSyndicate,
  createUnstructuredSyndicate,
};

export default SyndicateService;
