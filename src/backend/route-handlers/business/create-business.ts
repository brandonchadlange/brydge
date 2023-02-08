import { NextApiRequest, NextApiResponse } from "next";
import BusinessService from "@/backend/services/business";
import { BusinessCreateDTO } from "@/backend/dto/business/business-create";
import getSession from "@/backend/utility/get-session";

const createBusinessRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession(req, res);
  const createBusinessDTO = req.body as BusinessCreateDTO;

  const business = await BusinessService.createBusiness(
    createBusinessDTO,
    session.uid
  );

  res.status(201).send(business);
};

export default createBusinessRouteHandler;
