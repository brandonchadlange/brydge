import createBusinessRouteHandler from "@/backend/route-handlers/business/create-business";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  POST: createBusinessRouteHandler
});
