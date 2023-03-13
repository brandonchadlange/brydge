import UserRepository from "@/backend/repositories/user";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";
import pages from "@/common/pages";

export default RouteHandler({
  async GET(req, res) {
    const { uid } = await getSession(req, res);
    const user = await UserRepository.getUserById(uid);

    if (user?.requiresOnboarding) {
      return res.redirect(pages.merchantOnboarding());
    }

    return res.redirect(pages.dashboard());
  },
});
