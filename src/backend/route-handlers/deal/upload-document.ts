import DealDocumentService from "@/backend/services/deal-document";
import DocumentService from "@/backend/services/document";
import { NextApiRequest, NextApiResponse } from "next";

const uploadDealDocumentRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const dealId = req.query.id as string;
  const document = req.body as File;

  const documentRef = await DealDocumentService.createDealDocument(
    dealId,
    document.name,
    document.type
  );

  const uploadedDocument = await DocumentService.uploadDocument(
    document,
    documentRef.id
  );

  await DealDocumentService.updateDealDocumentPublicUrl(
    documentRef.id,
    uploadedDocument.publicUrl
  );

  documentRef.publicUrl = uploadedDocument.publicUrl;

  res.status(201).send(documentRef);
};

export default uploadDealDocumentRouteHandler;
