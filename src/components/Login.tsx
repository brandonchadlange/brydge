import Button from "@/components/Button";
import useFormField from "@/utils/useFormField";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

import GoogleIcon from "@/images/layout/auth/google.png";
import Image from "next/image";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

enum PageState {
  Initial,
  LoggingInWithGoogle,
}

export default function LoginPage() {
  const EmailField = useFormField("email");
  const PasswordField = useFormField("password");
  const [pageState, setPageState] = useState(PageState.Initial);

  const router = useRouter();
  const callbackUrl = router.query.callbackUrl;

  const submitSignInWithCredentials = async (values: any) => {
    const signInResponse = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/api/login",
      email: values.email,
      password: values.password,
    });
  };

  const signInWithGoogle = () => {
    setPageState(PageState.LoggingInWithGoogle);
    signIn("google", { redirect: true, callbackUrl: "/api/login" });
  };

  return (
    <div className="flex items-center text-primary justify-center h-full">
      <div className="flex flex-col w-10/12 p-4  md:justify-center h-5/6 md:w-[440px] md:h-3/4">
        <span className="text-2xl font-semibold text-center">Log in</span>
        <span className="mb-5 text-center opacity-80">
          Fill in your log in details to proceed
        </span>
        <Formik initialValues={{}} onSubmit={submitSignInWithCredentials}>
          {({ submitForm }) => (
            <Form>
              <EmailField />
              <div className="h-2"></div>
              <PasswordField />
              <div className="flex justify-between mt-3 mb-6">
                {/* <label className="text-primary opacity-60">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer accent-dark-400"
                  />
                  Remember me
                </label> */}
                {/* <Link
                  href="/forgot-password"
                  className="text-secondary font-semibold"
                >
                  Forgot password?
                </Link> */}
              </div>

              <Button type="submit" full>
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
        <div className="w-full py-4 ml-auto mr-auto overflow-hidden text-center divider text-dark before:border-b before:border-dark-100 before:inline-block before:h-2 before:relative before:align-middle before:w-1/2 before:mb-2 after:border-b after:border-dark-100 after:inline-block after:h-2 after:relative after:align-middle after:w-1/2 after:mb-2 before:right-2 before:ml-[-50%] after:left-2 after:mr-[-50%]">
          <span className="text-sm text-primary opacity-60">OR</span>
        </div>

        <button
          onClick={signInWithGoogle}
          className="flex gap-4 justify-center px-6 py-3 text-center text-gray-700 bg-white border border-gray-700 transition ease-in-out rounded-full font-medium"
        >
          {pageState === PageState.LoggingInWithGoogle && (
            <CgSpinner className="w-6 h-6 animate-spin" />
          )}
          {pageState === PageState.Initial && (
            <>
              <Image
                alt="google icon"
                src={GoogleIcon}
                height={24}
                width={24}
              />
              Sign in with Google
            </>
          )}
        </button>

        <div className="flex flex-col justify-center mt-8 md:flex-row font-semibold">
          <p className="mr-2 opacity-60">Don&apos;t have an account?</p>
          <Link href="/signup" className="text-secondary">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
