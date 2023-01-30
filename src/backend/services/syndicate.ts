import { CreateStructuredSyndicateDTO } from "../dto/syndicate/create-structured-syndicate";
import SyndicateRepository from "../repositories/syndicate";

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

const createUnstructuredSyndicate = async () => {};

const SyndicateService = {
  createStructuredSyndicate,
  createUnstructuredSyndicate,
};

export default SyndicateService;
