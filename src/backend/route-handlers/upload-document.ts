import * as DocumentService from "@/backend/services/document";
import { NextApiRequest, NextApiResponse } from "next";

const uploadDocumentRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const document = req.body;
  const uploadedDocument = await DocumentService.uploadDocument(document);
  res.status(201).send(uploadedDocument);
};

export default uploadDocumentRouteHandler;
