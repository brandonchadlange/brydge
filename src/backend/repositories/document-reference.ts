import { Document } from "@prisma/client";
import prismaClient from "../prisma";

type CreateDocrefData = {
  name: string;
  contentType: string;
  sizeInMb: number;
};

const createDocumentRef = (
  name: string,
  contentType: string,
  sizeInMb: number
) => {
  return prismaClient.document.create({
    data: {
      name: name,
      contentType: contentType,
      sizeInMb: sizeInMb,
      publicUrl: "",
    },
  });
};

const setPublicUrl = (id: string, publicUrl: string) => {
  return prismaClient.document.update({
    where: {
      id: id,
    },
    data: {
      publicUrl: publicUrl,
    },
  });
};

const DocumentRefRepository = {
  createDocumentRef,
  setPublicUrl,
};

export default DocumentRefRepository;
