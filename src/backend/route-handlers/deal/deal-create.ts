import { DealCreateDTO } from "@/backend/dto/deal/deal-create";
// import FincraPaymentProvider from "@/backend/payment-providers/fincra";
import DealService from "@/backend/services/deal";
import { NextApiRequest, NextApiResponse } from "next";

const dealCreateRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const dealCreateRequest = req.body as DealCreateDTO;

  const newDeal = await DealService.createDeal(dealCreateRequest);

  // const paymentProvider = new FincraPaymentProvider();
  // await paymentProvider.onDealCreate(newDeal!);

  res.status(201).send(newDeal);
};

export default dealCreateRouteHandler;
