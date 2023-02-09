import UserService from "@/backend/services/user";
import BusinessService from "@/backend/services/business";
import SyndicateService from "@/backend/services/syndicate";
import getSession from "@/backend/utility/get-session";
import { NextApiRequest, NextApiResponse } from "next";

const loginRouteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);
  const callbackUrl = req.query.callbackUrl;

  if (!session) {
    return res.status(401).send("Unauthorized");
  }

  const user = await UserService.getUserById(session.uid);

  if (!user) {
    return res.status(404).send("Failed to find user");
  }

  const userBusinesses = await BusinessService.getUserBusinesses(session.uid);
  const userStructuredSyndicates =
    await SyndicateService.getUserStructuredSyndicates(session.uid);
  const userUnstructuredSyndicates =
    await SyndicateService.getUserUnstructuredSyndicates(session.uid);

  const isBusiness = userBusinesses.length > 0;
  const isSyndicate =
    userStructuredSyndicates.length > 0 ||
    userUnstructuredSyndicates.length > 0;

  const isOnboarded = isBusiness || isSyndicate;

  if (!isOnboarded) {
    return res.redirect("/onboarding");
  }

  if (callbackUrl !== undefined) {
    const decodedCallbackUrl = decodeURIComponent(callbackUrl as string);
    return res.redirect(decodedCallbackUrl);
  }

  res.redirect("/dashboard");
};

export default loginRouteHandler;
