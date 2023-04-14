import supabaseClient, { documentStorage } from "../supabase";

export const uploadDocument = async (file: File, name: string = "untitled") => {
  const uploadResponse = await documentStorage.upload(name, file, {
    upsert: false,
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
