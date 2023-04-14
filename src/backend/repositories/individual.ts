import prismaClient from "../prisma";

const createIndividual = () => {
  return prismaClient.institution.create({
    data: {
      entityId: "",
      registeredName: "",
      headName: "",
      headEmail: "",
      registeredCompanyNumber: "",
      bankVerificationNumber: "",
      operationalAddressId: "",
      utilityBillId: "",
    },
  });
};

const IndividualRepository = {
  createIndividual,
};

export default IndividualRepository;
