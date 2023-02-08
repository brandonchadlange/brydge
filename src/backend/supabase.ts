import { createClient } from "@supabase/supabase-js";

const projectId = process.env.SUPABASE_PROJECT_ID as string;
const anonKey = process.env.SUPABASE_ANON_KEY as string;
const documentBucketName = process.env.SUPABASE_DOCUMENT_BUCKET_NAME as string;

const supabaseClient = createClient(
  `https://${projectId}.supabase.co`,
  anonKey
);

export const documentStorage = supabaseClient.storage.from(documentBucketName);
