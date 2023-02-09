import { User } from '@prisma/client';
import UserRepository from '../repositories/user';

const getUserById = (userId: string) => {
  return UserRepository.getUserById(userId);
};

const updateUserById = (userId: string, data: Partial<User>) => {
  return UserRepository.updateUserById(userId, data);
}

const UserService = {
  getUserById,
  updateUserById,
};

export default UserService;
