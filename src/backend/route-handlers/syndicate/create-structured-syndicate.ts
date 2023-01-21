import { NextApiRequest, NextApiResponse } from "next";
import SyndicateService from "@/backend/services/syndicate";
import { CreateStructuredSyndicateDTO } from "@/backend/dto/syndicate/create-structured-syndicate";

const createStructuredSyndicate = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const createStructuredSyndicateDTO = req.body as CreateStructuredSyndicateDTO;

  const structuredSyndicate = await SyndicateService.createStructuredSyndicate(
    createStructuredSyndicateDTO
  );

  res.status(201).send(structuredSyndicate);
};

export default createStructuredSyndicate;
