import { NotificationActionType } from "@/common/enums/notification";
import prismaClient from "../prisma";

const createNotification = (userId: string, action: NotificationActionType) => {
  return prismaClient.notification.create({
    data: {
      userId: userId,
      action: action,
    },
  });
};

const NotificationRepository = {
  createNotification,
};

export default NotificationRepository;
