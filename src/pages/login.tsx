import Login from "@/components/Login";
import withAuthenticationLayout from "@/components/withAuthenticationLayout";
import Head from "next/head";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login — Brydge</title>
        <meta name="description" content="Signup with Brydge.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
};

export default withAuthenticationLayout(LoginPage);
