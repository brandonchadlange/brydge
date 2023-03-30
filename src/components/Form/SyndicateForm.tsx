import { User } from "@prisma/client";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import showToast from "@/frontend/utility/show-toast";
import Button from "../Button";
import Input from "../input";

const getSyndicatesForm = () => ({
  name: "",
  email: "",
});

const getDealFormValidation = () =>
  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
  });

export function SyndicateForm({
  toggleSlideOut,
}: {
  toggleSlideOut: () => void;
}) {
  const onSubmit = async (values: Partial<User>) => {
    toggleSlideOut();

    showToast("Successfully updated details");
  };
  return (
    <div className="max-h-screen overflow-y-hidden p-4">
      <h1 className="text-lg font-bold font-primary mb-4">
        Update user details
      </h1>
      <Formik
        initialValues={getSyndicatesForm()}
        validationSchema={getDealFormValidation()}
        onSubmit={onSubmit}
      >
        {({}) => (
          <Form>
            <Input.FormField label="Name">
              <Input.Text placeholder="Name" name="name" />
            </Input.FormField>
            <Input.FormField label="Email">
              <Input.Text type="email" placeholder="Email" name="email" />
            </Input.FormField>

            <Button type="submit" full>
              Save and Continue
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
