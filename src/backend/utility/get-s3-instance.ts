import S3 from "aws-sdk/clients/s3";

export const getS3Instance = () => {
  const s3 = new S3({
    region: "eu-central-1",
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    signatureVersion: process.env.SINGNATURE_VERSION,
  });

  return s3;
};
