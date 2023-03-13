import UserRepository from "@/backend/repositories/user";
import EntityRegistrationService from "@/backend/services/entity-registration";
import getSession from "@/backend/utility/get-session";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const entityType = req.query.entityType as EntityType;

    const { uid } = await getSession(req, res);
    const user = await UserRepository.getUserById(uid);

    const response = await EntityRegistrationService.registerEntity(
      entityType,
      user!,
      req.body
    );

    res.status(201).send(response);
  },
});
