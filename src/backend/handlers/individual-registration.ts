import prismaClient from "../prisma";

const handleIndividualRegistration = (entityId: string, data: any) => {
  return prismaClient.individual.create({
    data: {
      entityId,
      ...data,
    },
  });
};

export default handleIndividualRegistration;
