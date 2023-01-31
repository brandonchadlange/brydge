import { User } from '@prisma/client';
import prismaClient from '../prisma';

const getUserById = async (userId: string) => {
  return prismaClient.user.findFirst({
    where: {
      id: userId,
    },
  });
};

const updateUserById = async (userId: string, data: Partial<User>) => {
  return prismaClient.user.update({
    where: {
      id: userId,
    },
    data
  })
}

const UserRepository = {
  getUserById,
  updateUserById,
};

export default UserRepository;
