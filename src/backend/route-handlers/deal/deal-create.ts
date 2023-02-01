import { DealCreateDTO } from "@/backend/dto/deal/deal-create";
import DealService from "@/backend/services/deal";
import { NextApiRequest, NextApiResponse } from "next";

const dealCreateRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const dealCreateRequest = req.body as DealCreateDTO;
  const newDeal = await DealService.createDeal(dealCreateRequest);
  res.status(201).send(newDeal);
};

export default dealCreateRouteHandler;
