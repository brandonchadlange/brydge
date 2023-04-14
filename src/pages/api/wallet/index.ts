import prismaClient from "@/backend/prisma";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async GET(req, res) {
    const { uid } = await getSession(req, res);

    const wallet = await prismaClient.wallet.findFirst({
      where: {
        userId: uid,
      },
      include: {
        balanceList: {
          include: {
            virtualAccount: true,
          },
        },
      },
    });

    res.send(wallet?.balanceList);
  },
});
