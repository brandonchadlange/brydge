// import FincraPaymentProvider from "@/backend/payment-providers/fincra";
import FincraService from "@/backend/services/fincra";
import { FincraWebhookState } from "@/backend/services/fincra/webhook";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  async POST(req, res) {
    const webhookId = req.query.id as string;

    if (webhookId === "fincra") {
      console.log("Webhook recieved from fincra");

      const response = await FincraService.handleFincraWebhookEvent(req.body);

      if (response.state === FincraWebhookState.Error) {
        return res.status(500).send("An error has occured");
      }

      res.status(200).send(null);
    }

    res.status(404).send(`Webhook with id '${webhookId}' could not be found.`);
  },
});
