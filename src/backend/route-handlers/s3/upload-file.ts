import { getS3Instance } from "@/backend/utility/get-s3-instance";
import { NextApiRequest, NextApiResponse } from "next";

const uploadFile = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { name, type } = req.body;

  const s3 = getS3Instance();
  const url = await s3.getSignedUrlPromise("putObject", {
    Bucket: process.env.BUCKET_NAME,
    ContentType: type,
    Key: name
  });

  res.status(200).send({ url });
};

export default uploadFile;

