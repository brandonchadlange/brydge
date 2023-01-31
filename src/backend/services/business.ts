import BusinessRepository from '../repositories/business';

const getUserBusinesses = async (userId: string) => {
  return BusinessRepository.getUserBusinesses(userId);
};

const BusinessService = { getUserBusinesses };

export default BusinessService;
