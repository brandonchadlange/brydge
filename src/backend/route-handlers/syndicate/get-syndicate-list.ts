import getSession from "@/backend/utility/get-session";
import { NextApiRequest, NextApiResponse } from "next";

const getSyndicateListRouteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession(req, res);
  res.status(200).send(null);
};

export default getSyndicateListRouteHandler;
