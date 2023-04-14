import Button from "@/components/Button";
import withAuthenticationLayout from "@/components/withAuthenticationLayout";
import useFormField from "@/utils/useFormField";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const EmailVerification = () => {
  return (
    <div className="flex items-center justify-center h-screen w-100">
      <div className=" text-center flex flex-col w-10/12 p-4  md:justify-center h-5/6 md:w-[440px] md:h-3/4">
        <div className="text-5xl font-bold mb-7">Almost there!👍</div>
        <div className="text-xl">
          A verification link has been sent to your email. Please click the link
          to confirm your registration.
        </div>
        <div className="flex flex-col justify-center mt-8 md:flex-row font-semibold">
          <span className="text-xl">
            Didn&apos;t receive a link?{" "}
            <Link href="/login" className="text-secondary">
              Retry
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationLayout(EmailVerification);
