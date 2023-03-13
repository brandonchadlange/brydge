import { EntityType } from "@/common/enums";
import prismaClient from "../prisma";

const getEntityById = (id: string) => {
  return prismaClient.entity.findFirst({
    where: {
      id: id,
    },
  });
};

const createEntity = (type: EntityType) => {
  return prismaClient.entity.create({
    data: {
      type: type,
    },
  });
};

const EntityRepository = {
  getEntityById,
  createEntity,
};

export default EntityRepository;
