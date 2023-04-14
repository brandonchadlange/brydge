import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const anonKey = process.env.SUPABASE_ANON_KEY as string;
const documentBucketName = process.env.SUPABASE_DOCUMENT_BUCKET_NAME as string;

const supabaseClient = createClient(supabaseUrl, anonKey);

export default supabaseClient;

export const documentStorage = supabaseClient.storage.from(documentBucketName);
