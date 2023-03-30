import prismaClient from "@/backend/prisma";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async GET(req, res) {
    const { uid } = await getSession(req, res);

    const transactions = await prismaClient.walletTransaction.findMany({
      where: {
        balance: {
          wallet: {
            userId: uid,
          },
        },
      },
    });

    res.send(transactions);
  },
});
