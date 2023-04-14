import prismaClient from "@/backend/prisma";
import EntityRepository from "@/backend/repositories/entity";
import UserRepository from "@/backend/repositories/user";
import FincraService from "@/backend/services/fincra";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";
import { EntityType } from "@/common/enums";
import { Individual, Institution, Merchant } from "@prisma/client";

export default RouteHandler({
  async GET(req, res) {
    const { uid } = await getSession(req, res);
    const user = await UserRepository.getUserById(uid);
    const verified = user!.map().entityVerified;
    res.status(200).send(verified);
  },
  async POST(req, res) {
    const userId = req.query.userId as string;
    const user = await UserRepository.getUserById(userId);

    user!.setEntityVerified(true);

    const userEntity = await EntityRepository.getEntityById(
      user!.map().entityId!
    );

    let entity: Merchant | Institution | Individual | null;

    if (userEntity!.type === EntityType.individual) {
      entity = await prismaClient.individual.findFirst({
        where: {
          entityId: userEntity!.id,
        },
      });
    }

    if (userEntity!.type === EntityType.institution) {
      entity = await prismaClient.institution.findFirst({
        where: {
          entityId: userEntity!.id,
        },
      });
    }

    if (userEntity!.type === EntityType.merchant) {
      entity = await prismaClient.merchant.findFirst({
        where: {
          entityId: userEntity!.id,
        },
      });
    }

    // CREATE WALLET AND VA + NAIRA BALANCE
    const wallet = await prismaClient.wallet.create({
      data: {
        userId: userId,
      },
    });

    const accountType =
      userEntity!.type === EntityType.individual ? "individual" : "corporate";

    const fincraNairaVirtualAccount =
      await FincraService.createNairaVirtualAccount(
        user!.map(),
        entity!.bankVerificationNumber.toString(),
        accountType
      );

    await prismaClient.balance.create({
      data: {
        currency: "NGN",
        valueInCents: 0,
        virtualAccountId: fincraNairaVirtualAccount!.id,
        walletId: wallet.id,
      },
    });

    res.send("ok");
  },
});
