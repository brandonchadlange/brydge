import IndividualRepository from "../repositories/individual";

const handleIndividualRegistration = (entityId: string, data: any) => {
  IndividualRepository.createIndividual();
};

export default handleIndividualRegistration;
