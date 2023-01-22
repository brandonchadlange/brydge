import createStructuredSyndicateRouteHandler from "@/backend/route-handlers/syndicate/create-structured-syndicate";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  POST: createStructuredSyndicateRouteHandler,
});
