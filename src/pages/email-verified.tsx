import withAuthenticationLayout from "@/components/withAuthenticationLayout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const EmailVerified = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Email Verified — Brydge</title>
        <meta name="description" content="Signup with Brydge.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-100">
        <div className="flex flex-col">
          <div className="flex items-center justify-center h-screen font-primary w-100">
            <div className="flex justify-center flex-col w-full p-6 text-center h-4/5 ">
              <h1 className="text-2xl font-semibold text-center">
                Email successfully verified
              </h1>
              <p className="mb-5 text-center opacity-80">
                Please log in to continue
              </p>
              <Link
                className="flex justify-center mt-4 px-6 py-3 text-center text-white transition ease-in-out rounded-full bg-dark hover:bg-dark-400"
                href="/login"
              >
                Go to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthenticationLayout(EmailVerified);
