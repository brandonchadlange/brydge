import dealGetRouteHandler from "@/backend/route-handlers/deal/deal-get";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  GET: dealGetRouteHandler,
});
