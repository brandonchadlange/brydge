import { RouteHandler } from "@/backend/utility/route-handler";
import loginRouteHandler from "@/backend/route-handlers/login";

export default RouteHandler({
  GET: loginRouteHandler,
});
