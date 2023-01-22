import { CreateStructuredSyndicateDTO } from "../dto/syndicate/create-structured-syndicate";
import SyndicateRepository from "../repositories/syndicate";

const createStructuredSyndicate = async (
  createStructuredSyndicateDTO: CreateStructuredSyndicateDTO
) => {
  return SyndicateRepository.createStructuredSyndicate(
    createStructuredSyndicateDTO
  );
};

const createUnstructuredSyndicate = async () => {};

const SyndicateService = {
  createStructuredSyndicate,
  createUnstructuredSyndicate,
};

export default SyndicateService;
