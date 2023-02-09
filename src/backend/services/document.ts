import { documentStorage } from "../supabase";

export const uploadDocument = async (file: File) => {
  const uploadResponse = await documentStorage.upload("test.pdf", file, {
    upsert: true,
    contentType: file.type,
  });

  const urlResponse = await documentStorage.getPublicUrl("test.pdf");

  return {
    ...uploadResponse,
    publicUrl: urlResponse.data.publicUrl,
  };
};
