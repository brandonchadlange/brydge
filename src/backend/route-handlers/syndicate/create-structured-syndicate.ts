import { NextApiRequest, NextApiResponse } from "next";
import SyndicateService from "@/backend/services/syndicate";
import { CreateStructuredSyndicateDTO } from "@/backend/dto/syndicate/create-structured-syndicate";
import getSession from "@/backend/utility/get-session";

const createStructuredSyndicateRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession(req, res);
  const createStructuredSyndicateDTO = req.body as CreateStructuredSyndicateDTO;

  const structuredSyndicate = await SyndicateService.createStructuredSyndicate(
    createStructuredSyndicateDTO,
    session.uid
  );

  res.status(201).send(structuredSyndicate);
};

export default createStructuredSyndicateRouteHandler;
