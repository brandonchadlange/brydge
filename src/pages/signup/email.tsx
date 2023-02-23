import * as React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import "react-phone-number-input/style.css";
import Button from "@/components/Button";
import withAuthenticationLayout from "@/components/withAuthenticationLayout";

const PhoneSignup = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Email Signup — Brydge</title>
        <meta name="description" content="Signup with Brydge.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid md:grid-cols-3">
        <div className="relative overflow-x-hidden overflow-y-auto md:col-span-2">
          <button type="button" className="absolute top-8 right-8">
            Go Back
          </button>
          <div className="flex items-center justify-center h-screen font-primary w-100">
            <div className="flex flex-col w-full p-4 text-center h-4/5 md:w-3/5 md:h-3/4">
              <span className="text-2xl font-bold">Hi, Big Fella✋</span>
              <span className="my-5 text-xl font-semibold opacity-70 md:my-3">
                Complete the form below to get started{" "}
              </span>
              <form>
                <input
                  type="text"
                  className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="email"
                  className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
                  placeholder="Email Address"
                  required
                />
                <div className="relative flex items-center">
                  <div
                    id="phone-input"
                    className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none"
                  ></div>
                </div>
                <input
                  type="password"
                  className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
                  placeholder="Password"
                  required
                />
                <Button type="submit" loading={false} full>
                  Create Account
                </Button>
              </form>
              <span>
                Already have an account?{" "}
                <Link href="/login" className="text-[#79B100]">
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuthenticationLayout(PhoneSignup);
