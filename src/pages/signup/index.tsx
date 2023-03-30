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
      <div className="flex items-center justify-center h-screen w-100">
      <div className="flex flex-col ">
          <Signup />
          </div>
      </div>
    </>
  );
};

export default withAuthenticationLayout(SignupPage);
