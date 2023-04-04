import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Card from "@/components/card";
import Button from "@/components/Button";
import { User } from "@prisma/client";
import showToast from "@/frontend/utility/show-toast";
import Input from "@/components/input";

const getSecurityCardFormValidation = () =>
  Yup.object().shape({
    oldPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string().required("New password is required"),
  });

const getSecurityCardForm = () => ({
  oldPassword: "",
  newPassword: "",
});

const SecurityCard = () => {
  const onSubmit = async (values: Partial<User>) => {
    console.log(values);
    showToast("Successfully updated details");
  };

  return (
    <Card className="mt-12 p-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">Security</span>
        <Button className="!px-12 !py-2 rounded-lg font-medium" type="submit" form="passwordForm">
          Change Password
        </Button>
      </div>
      <Formik
          initialValues={getSecurityCardForm()}
          validationSchema={getSecurityCardFormValidation()}
          onSubmit={onSubmit}
        >
          {({ }) => (
            <Form id="passwordForm" className="flex w-full flex-wrap gap-8">
              <Input.FormField className="w-1/4" labelClasses="mb-2 text-gray-600 font-medium text-sm" label="Current Password">
                <Input.Text placeholder="Enter current password" name="oldPassword" />
              </Input.FormField>
              <Input.FormField className="w-1/4" labelClasses="mb-2 text-gray-600 font-medium text-sm" label="New Password">
                <Input.Text placeholder="Enter new password" name="newPassword" />
              </Input.FormField>
            </Form>
          )}
        </Formik>
    </Card>
  );
};

export default SecurityCard;
