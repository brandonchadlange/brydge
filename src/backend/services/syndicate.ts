import { CreateStructuredSyndicateDTO } from "../dto/syndicate/create-structured-syndicate";
import SyndicateProvider from "../repositories/syndicate";

const createStructuredSyndicate = async (
  createStructuredSyndicateDTO: CreateStructuredSyndicateDTO
) => {
  return SyndicateProvider.createStructuredSyndicate(
    createStructuredSyndicateDTO
  );
};

const createUnstructuredSyndicate = async () => {};

const SyndicateService = {
  createStructuredSyndicate,
  createUnstructuredSyndicate,
};

export default SyndicateService;
