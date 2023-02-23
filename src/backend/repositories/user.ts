import UserModel from "../models/user";
import prismaClient from "../prisma";

const getUserById = async (id: string) => {
  const user = await prismaClient.user.findFirst({
    where: {
      id: id,
    },
  });

  if (user === null) {
    return null;
  }

  return new UserModel(user);
};

const updateUserEntity = async (id: string, entityId: string) => {
  return prismaClient.user.update({
    where: {
      id: id,
    },
    data: {
      entityId: entityId,
    },
  });
};

const UserRepository = {
  getUserById,
  updateUserEntity,
};

export default UserRepository;
