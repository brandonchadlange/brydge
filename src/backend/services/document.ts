import { documentStorage } from "../supabase";

export const uploadDocument = async (file: File, name = "untitled") => {
  const uploadResponse = await documentStorage.upload(name, file, {
    upsert: true,
    contentType: file.type,
  });

  const urlResponse = await documentStorage.getPublicUrl(name);

  return {
    ...uploadResponse,
    publicUrl: urlResponse.data.publicUrl,
  };
};

const DocumentService = {
  uploadDocument,
};

export default DocumentService;
