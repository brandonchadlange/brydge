import LeftPanel from "@/components/LeftPanel";
import Signup from "@/components/Signup";
import withAuthenticationLayout from "@/components/withAuthenticationLayout";
import Head from "next/head";
import { useRouter } from "next/router";

const SignupPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Signup — Brydge</title>
        <meta name="description" content="Signup with Brydge.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid md:grid-cols-3">
        <div className="relative md:col-span-2">
          <button
            type="button"
            className="absolute top-8 right-8"
            onClick={() => router.back()}
          >
            Go Back
          </button>
          <Signup />
        </div>
      </section>
    </>
  );
};

export default withAuthenticationLayout(SignupPage);
