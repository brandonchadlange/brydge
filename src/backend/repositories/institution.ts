import prismaClient from "../prisma";

const createInstitution = () => {
  return prismaClient.institution.create({
    data: {
      entityId: "",
      registeredName: "",
      headName: "",
      headEmail: "",
      registeredCompanyNumber: "",
      bankVerificationNumber: 0,
      operationalAddressId: "",
      utilityBillId: "",
    },
  });
};

const InstitutionRepository = {
  createInstitution,
};

export default InstitutionRepository;
