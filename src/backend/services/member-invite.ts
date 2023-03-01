import { NotificationActionType } from "@/common/enums/notification";
import MemberInviteRepository from "../repositories/member-invite";
import NotificationRepository from "../repositories/notification";

async function inviteExistingUser(merchantId: string, userId: string) {
  const notification = await NotificationRepository.createNotification(
    userId,
    NotificationActionType.memberInvite
  );

  return MemberInviteRepository.createExistingUserMemberInvite(
    merchantId,
    userId,
    notification.id
  );
}

async function inviteExternalUser(merchantId: string, email: string) {
  // await EmailService.sendExternalMemberInvite(email);
  return MemberInviteRepository.createExternalMemberInvite(merchantId, email);
}

const inviteMember = async (merchantId: string, email: string) => {
  // const existingUser = await UserRepository.getUserByEmail(email);

  // console.log(existingUser);

  // if (existingUser !== null) {
  //   return inviteExistingUser(merchantId, existingUser.id);
  // }

  return inviteExternalUser(merchantId, email);
};

const MemberInviteService = {
  inviteMember,
};

export default MemberInviteService;
