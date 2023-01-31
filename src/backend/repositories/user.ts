import prismaClient from '../prisma';

const getUserById = async (userId: string) => {
  return prismaClient.user.findFirst({
    where: {
      id: userId,
    },
  });
};

const UserRepository = {
  getUserById,
};

export default UserRepository;
