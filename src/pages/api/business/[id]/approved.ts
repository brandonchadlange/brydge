import businessApprovedRouteHandler from "@/backend/route-handlers/business/approved";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  POST: businessApprovedRouteHandler,
});
