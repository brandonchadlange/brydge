import prismaClient from "@/backend/prisma";
import FincraApi from "@/backend/services/fincra/api";
import WalletService from "@/backend/services/wallet";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const { uid } = await getSession(req, res);

    const wallet = await prismaClient.wallet.findFirst({
      where: {
        userId: uid,
      },
      include: {
        balanceList: true,
      },
    });

    const ngnWallet = await wallet!.balanceList.find(
      (balance) => balance.currency === "NGN"
    )!;

    const payoutTransaction = await WalletService.createPayout();

    await FincraApi.payout.createNgnToUsdPayout();
  },
});
