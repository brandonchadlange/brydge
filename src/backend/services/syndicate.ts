import { CreateStructuredSyndicateDTO } from '../dto/syndicate/create-structured-syndicate';
import SyndicateRepository from '../repositories/syndicate';

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
  const newSyndicate = await SyndicateRepository.createStructuredSyndicate(createStructuredSyndicateDTO);

  await SyndicateRepository.createStructuredSyndicateUser({
    structuredSyndicateId: newSyndicate.id,
    userId: userId,
  });

  return newSyndicate;
};

const createUnstructuredSyndicate = async () => {};

const SyndicateService = {
  getUserStructuredSyndicates,
  getUserUnstructuredSyndicates,
  createStructuredSyndicate,
  createUnstructuredSyndicate,
};

export default SyndicateService;
