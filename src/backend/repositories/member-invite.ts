import { MemberInviteUserType } from "@/common/enums/member-invite";
import prismaClient from "../prisma";

const createExistingUserMemberInvite = (
  merchantId: string,
  userId: string,
  notificationId: string
) => {
  return prismaClient.memberInvite.create({
    data: {
      userType: MemberInviteUserType.existing,
      merchantId: merchantId,
      userId: userId,
      notificationId: notificationId,
    },
  });
};

const createExternalMemberInvite = (
  merchantId: string,
  emailAddress: string
) => {
  return prismaClient.memberInvite.create({
    data: {
      userType: MemberInviteUserType.external,
      merchantId: merchantId,
      emailAddress: emailAddress,
    },
  });
};

const MemberInviteRepository = {
  createExistingUserMemberInvite,
  createExternalMemberInvite,
};

export default MemberInviteRepository;
