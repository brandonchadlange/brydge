import endpoints from "@/frontend/config/api-endpoints";
import upload from "../utility/upload-document";

const uploadDocument = async (
  file: File,
  onUploadProgess?: (value: number) => void
) => {
  const endpoint = endpoints.document.upload();
  const response = await upload(endpoint, file, onUploadProgess);
  return response.data;
};

const documentService = {
  uploadDocument,
};

export default documentService;
