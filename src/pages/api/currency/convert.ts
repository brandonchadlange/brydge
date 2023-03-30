import FincraService from "@/backend/services/fincra";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const currencyQuote = await FincraService.generateConversionQuote(req.body);
    res.status(201).send(currencyQuote?.data);
  },
});
