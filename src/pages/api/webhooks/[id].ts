import FincraPaymentProvider from "@/backend/payment-providers/fincra";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const paymentProvider = new FincraPaymentProvider();
    await paymentProvider.handleWebhook(req.body);
    res.status(200).send(null);
  },
});

// https://bryde.co/api/webhooks/fincra
