import UserRepository from "@/backend/repositories/user";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async GET(req, res) {
    const { uid } = await getSession(req, res);
    const user = await UserRepository.getUserById(uid);
    res.status(200).send(user?.map());
  },
});
