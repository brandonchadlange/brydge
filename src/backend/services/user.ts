import UserRepository from '../repositories/user';

const getUserById = (userId: string) => {
  return UserRepository.getUserById(userId);
};

const UserService = {
  getUserById,
};

export default UserService;
