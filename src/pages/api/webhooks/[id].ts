// import FincraPaymentProvider from "@/backend/payment-providers/fincra";
import FincraService from "@/backend/services/fincra";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    await FincraService.recievePayment(req.body);
    res.status(200).send(null);
  },
});
