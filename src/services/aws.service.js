import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "sa-east-1",
  credentials: {
    accessKeyId: '123214421asdasdasdwsdsdccsadasd',
    secretAccessKey: 'asdafqwerasddaswasasswwss',
  },
});

const params = {
  /** input parameters */
};

const command = new PutObjectCommand(params);

try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
