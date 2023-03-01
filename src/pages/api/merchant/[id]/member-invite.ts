import MemberInviteService from "@/backend/services/member-invite";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const merchantId = req.query.id as string;
    const email = req.body.email;

    const inviteResponse = await MemberInviteService.inviteMember(
      merchantId,
      email
    );

    res.status(201).send(inviteResponse);
  },
});
