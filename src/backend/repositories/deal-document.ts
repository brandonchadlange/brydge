import prismaClient from "../prisma";

const createDealDocument = async (
  dealId: string,
  name: string,
  type: string
) => {
  return prismaClient.dealDocument.create({
    data: {
      dealId: dealId,
      name: name,
      type: type,
      publicUrl: "",
    },
  });
};

const updateDealDocumentPublicUrl = async (
  dealDocumentId: string,
  publicUrl: string
) => {
  return prismaClient.dealDocument.update({
    where: {
      id: dealDocumentId,
    },
    data: {
      publicUrl: publicUrl,
    },
  });
};

const DealDocumentRepository = {
  createDealDocument,
  updateDealDocumentPublicUrl,
};

export default DealDocumentRepository;
