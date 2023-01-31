import updateUserRouteHandler from '@/backend/route-handlers/user/update-user';
import { RouteHandler } from '@/backend/utility/route-handler';

export default RouteHandler({
  PUT: updateUserRouteHandler,
});
