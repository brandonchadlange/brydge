import InstitutionRepository from "../repositories/institution";

// When creating a funder, the registration will always be against a particulare entity(merchant)

const handleInstitutionRegistration = (entityId: string, data: any) => {
  InstitutionRepository.createInstitution();
  // Link user to entity
  // create member
};

export default handleInstitutionRegistration;
