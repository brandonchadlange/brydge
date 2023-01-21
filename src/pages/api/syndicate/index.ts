import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  GET(req, res) {
    res.status(200).send(null);
  },
});
