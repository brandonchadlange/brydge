import prismaClient from "../prisma";

const handleInstitutionRegistration = (entityId: string, data: any) => {
  return prismaClient.institution.create({
    data: {
      entityId,
      ...data,
    },
  });
};

export default handleInstitutionRegistration;
