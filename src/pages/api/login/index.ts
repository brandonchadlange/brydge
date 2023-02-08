import { RouteHandler } from "@/backend/utility/route-handler";
import getSession from "@/backend/utility/get-session";

export default RouteHandler({
  async GET(req, res) {
    const session = await getSession(req, res);
    res.redirect("/onboarding");
  },
});
