import uploadDocumentRouteHandler from "@/backend/route-handlers/upload-document";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  POST: uploadDocumentRouteHandler,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },
};
