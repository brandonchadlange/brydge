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

const setEntityVerified = async (id: string, verified: boolean) => {
  return prismaClient.user.update({
    where: {
      id: id,
    },
    data: {
      entityVerified: verified,
    },
  });
};

const createUser = async (data: CreateUserRequest) => {
  return prismaClient.user.create({
    data: {
      email: data.email,
      password: data.passwordHash,
      firstName: data.firstName,
      lastName: data.lastName,
      name: data.firstName + " " + data.lastName,
    },
  });
};

const UserRepository = {
  getUserById,
  getUserByEmail,
  updateUserEntity,
  setEntityVerified,
  createUser,
};

export default UserRepository;
