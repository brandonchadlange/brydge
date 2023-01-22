import getSyndicateListRouteHandler from "@/backend/route-handlers/syndicate/get-syndicate-list";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  GET: getSyndicateListRouteHandler,
});
