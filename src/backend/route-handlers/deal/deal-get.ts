import DealService from "@/backend/services/deal";
import { HttpStatusCode } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const dealGetRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const dealId = req.query.id;

  if (dealId === undefined) {
    return res
      .status(HttpStatusCode.BadRequest)
      .send("Please provide a deal id");
  }

  const deal = await DealService.getDealById(dealId as string);

  if (deal === null) {
    return res.status(HttpStatusCode.NotFound).send("Failed to find deal");
  }

  res.status(HttpStatusCode.Ok).send(deal);
};

export default dealGetRouteHandler;
