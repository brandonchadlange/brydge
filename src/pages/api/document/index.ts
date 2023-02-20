import DocumentRefRepository from "@/backend/repositories/document-reference";
import { RouteHandler } from "@/backend/utility/route-handler";
import DocumentService from "@/backend/services/document";

export default RouteHandler({
  async POST(req, res) {
    const file = req.body as File;

    const documentReference = await DocumentRefRepository.createDocumentRef(
      file.name,
      file.type,
      file.size
    );

    const { publicUrl } = await DocumentService.uploadDocument(
      file,
      documentReference.id
    );

    await DocumentRefRepository.setPublicUrl(documentReference.id, publicUrl);

    documentReference.publicUrl = publicUrl;

    res.status(201).send(documentReference);
  },
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },
};
