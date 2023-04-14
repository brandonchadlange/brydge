import prismaClient from "../prisma";

const createInstitution = () => {
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

const InstitutionRepository = {
  createInstitution,
};

export default InstitutionRepository;
