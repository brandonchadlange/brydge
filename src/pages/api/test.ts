import FincraService from "@/backend/services/fincra";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const va = await FincraService.createNairaVirtualAccount();
    res.send(va);
  },
});
