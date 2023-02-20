import InstitutionRepository from "../repositories/institution";

const handleInstitutionRegistration = (entityId: string, data: any) => {
  InstitutionRepository.createInstitution();
};

export default handleInstitutionRegistration;
