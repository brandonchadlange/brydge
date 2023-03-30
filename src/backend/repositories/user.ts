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

const getUserByEmail = async (email: string) => {
  return prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });
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

const createUser = async (data: CreateUserRequest) => {
  return prismaClient.user.create({
    data: {
      email: data.email,
      password: data.passwordHash,
      name: data.name,
    },
  });
};

const UserRepository = {
  getUserById,
  getUserByEmail,
  updateUserEntity,
  createUser,
};

export default UserRepository;
