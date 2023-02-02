import getUserRouteHandler from '@/backend/route-handlers/user/get-user';
import updateUserRouteHandler from '@/backend/route-handlers/user/update-user';
import { RouteHandler } from '@/backend/utility/route-handler';

export default RouteHandler({
  GET: getUserRouteHandler,
  PUT: updateUserRouteHandler
});
