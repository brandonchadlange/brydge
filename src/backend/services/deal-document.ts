import DealDocumentRepository from "../repositories/deal-document";

const createDealDocument = async (
  dealId: string,
  name: string,
  type: string
) => {
  return DealDocumentRepository.createDealDocument(dealId, name, type);
};

const updateDealDocumentPublicUrl = async (
  dealDocumentId: string,
  publicUrl: string
) => {
  return DealDocumentRepository.updateDealDocumentPublicUrl(
    dealDocumentId,
    publicUrl
  );
};

const DealService = {
  createDealDocument,
  updateDealDocumentPublicUrl,
};

export default DealService;
