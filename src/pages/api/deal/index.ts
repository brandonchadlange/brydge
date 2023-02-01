import dealCreateRouteHandler from "@/backend/route-handlers/deal/deal-create";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  POST: dealCreateRouteHandler,
});
