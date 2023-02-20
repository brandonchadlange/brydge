import EntityRegistrationService from "@/backend/services/entity-registration";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const entityType = req.query.entityType as EntityType;
    const registerEntityResponse =
      await EntityRegistrationService.registerEntity(entityType, req.body);
    res.status(201).send(registerEntityResponse);
  },
});
