import { NextApiRequest, NextApiResponse } from "next";
import BusinessService from "@/backend/services/business";
import FincraPaymentProvider from "@/backend/payment-providers/fincra";

const businessApprovedRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const businessId = req.query.id;

  if (businessId === undefined) {
    return res.status(400).send("Business id not provided");
  }

  const business = await BusinessService.getBusinessById(businessId as string);

  if (!business) {
    return res.status(404).send("Business could not be found");
  }

  const paymentProvider = new FincraPaymentProvider();

  await paymentProvider.onBusinessAccountApproved(business!);
  await BusinessService.approveBusiness(business!.id);

  res.status(201).send(true);
};

export default businessApprovedRouteHandler;
