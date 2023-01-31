import uploadFile from "@/backend/route-handlers/s3/upload-file";
import { RouteHandler } from "@/backend/utility/route-handler";

export default RouteHandler({
  POST: uploadFile
})