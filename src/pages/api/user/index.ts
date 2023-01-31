import getUserRouteHandler from '@/backend/route-handlers/user/get-user';
import { RouteHandler } from '@/backend/utility/route-handler';

export default RouteHandler({
  GET: getUserRouteHandler,
});
