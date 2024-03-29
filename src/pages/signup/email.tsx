import Button from "@/components/Button";
import OverlayLoader, { useOverlayLoader } from "@/components/overlay-loader";
import withAuthenticationLayout from "@/components/withAuthenticationLayout";
import FormField from "@/utils/useFormField";
import useFormValidation from "@/utils/useFormValidator";
import { Form, Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import mutations from "@/frontend/utility/mutations";
import showToast from "@/frontend/utility/show-toast";
import { useState } from "react";

type FormFieldsProps = {
  setFieldValue: (field: string, value: any) => void;
};

const FirstNameField = FormField("firstName");
const LastNameField = FormField("lastName");
const EmailField = FormField("email");
const PasswordField = FormField("password");

const EmailRegistrationeValidationRules: FormField[] = [
  "firstName",
  "lastName",
  "email",
  "password",
];

const EmailRegistrationForm = () => {
  const router = useRouter();
  const overlayLoader = useOverlayLoader();
  const validatorRules = EmailRegistrationeValidationRules;
  const validationSchema = useFormValidation(validatorRules);
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (data: any) => {
    setLoading(true);
    await mutations.registerWithEmail(data);
    setLoading(false);
    showToast("Success 🎉");
    router.push("/signup/email-verification");
  };

  return (
    <>
      <Head>
        <title>Email Signup — Brydge</title>
        <meta name="description" content="Signup with Brydge.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen w-100">
        <div className="flex flex-col w-10/12 p-4  md:justify-center h-5/6 md:w-[440px] md:h-3/4">
          <span className="text-2xl font-semibold text-center">
            Hi, Big Fella✋
          </span>
          <span className="mb-5 text-center opacity-80">
            Complete the form below to get started{" "}
          </span>
          <Formik
            initialValues={{}}
            onSubmit={onFormSubmit}
            validationSchema={validationSchema}
          >
            {({ setFieldValue }) => (
              <Form>
                <FirstNameField />
                <LastNameField />
                <EmailField />
                <PasswordField />

                <Button type="submit" full loading={loading}>
                  Create Account
                </Button>
              </Form>
            )}
          </Formik>

          <div className="flex flex-col justify-center mt-8 md:flex-row font-semibold">
            <span>
              <span className="opacity-60">Already have an account? </span>
              <Link href="/login" className="text-secondary">
                Sign in
              </Link>
            </span>
          </div>
        </div>
        <OverlayLoader controller={overlayLoader} />
      </div>
    </>
  );
};

export default withAuthenticationLayout(EmailRegistrationForm);
