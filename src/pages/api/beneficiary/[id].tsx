import prismaClient from "@/backend/prisma";
import FincraService from "@/backend/services/fincra";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async GET(req, res) {
    const beneficiaryId = req.query.id as string;

    const beneficiary = await prismaClient.beneficiary.findFirst({
      where: {
        id: beneficiaryId,
      },
    });

    const fincraBeneficiary = await FincraService.getBeneficiary(
      beneficiary!.fincraId
    );

    res.status(200).send(fincraBeneficiary.data);
  },
});
