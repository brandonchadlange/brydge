import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Card from "@/components/card";
import Button from "@/components/Button";
import { User } from "@prisma/client";
import showToast from "@/frontend/utility/show-toast";
import Input from "@/components/input";

const getPersonalInfoFormValidation = () =>
  Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

const getPersonalInfoForm = () => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

interface PersonalInfoCardProps {
  className?: string;
}

const PersonalInfoCard = ({ className }: PersonalInfoCardProps) => {
  const onSubmit = async (values: Partial<User>) => {
    console.log(values);
    showToast("Successfully updated details");
  };

  return (
    <Card className={`mb-8 p-4 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">Personal Information</span>
        <Button className="!px-12 !py-2 rounded-lg font-medium" type="submit" form="detailsForm">
          Save
        </Button>
      </div>
      <div className="flex">
        <Formik
          initialValues={getPersonalInfoForm()}
          validationSchema={getPersonalInfoFormValidation()}
          onSubmit={onSubmit}
        >
          {({ }) => (
            <Form id="detailsForm" className="flex flex-wrap gap-4">
              <Input.FormField className="w-2/5" labelClasses="mb-2 text-gray-600 font-medium text-sm" label="First name">
                <Input.Text placeholder="First name" name="firstName" />
              </Input.FormField>
              <Input.FormField className="w-2/5" labelClasses="mb-2 text-gray-600 font-medium text-sm" label="Last name">
                <Input.Text placeholder="Last name" name="lastName" />
              </Input.FormField>
              <Input.FormField className="w-2/5" labelClasses="mb-2 text-gray-600 font-medium text-sm" label="Email">
                <Input.Text type="email" placeholder="Email" name="email" />
              </Input.FormField>
              <Input.FormField className="w-2/5" labelClasses="mb-2 text-gray-600 font-medium text-sm" label="Phone Number">
                <Input.Text placeholder="Phone Number" name="phone" />
              </Input.FormField>
            </Form>
          )}
        </Formik>
      </div>
    </Card>
  );
};

export default PersonalInfoCard;
