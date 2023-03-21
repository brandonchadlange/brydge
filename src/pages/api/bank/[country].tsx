import DocumentRefRepository from "@/backend/repositories/document-reference";
import { RouteHandler } from "@/backend/utility/route-handler";
import DocumentService from "@/backend/services/document";
import FincraService from "@/backend/services/fincra";

export default RouteHandler({
  async GET(req, res) {
    const countryCode = req.query.country as string;
    const banks = await FincraService.getBanksByCountryCode(countryCode);
    res.send(banks);
  },
});
