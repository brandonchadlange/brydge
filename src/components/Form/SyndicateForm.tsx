import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import { User } from '@prisma/client';
import * as Yup from 'yup';

import Button from '../Button';
import Input from '../input';
import userService from '@/frontend/services/user';
import { UserContext } from '@/context';
import showToast from '@/frontend/utility/show-toast';

const getSyndicatesForm = () => ({
  name: '',
  email: '',
})

const getDealFormValidation = () => Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Email is required'),
});

export function SyndicateForm({ toggleSlideOut }: { toggleSlideOut: () => void}) {
  const { user, setUser } = useContext(UserContext);

  const onSubmit = async (values: Partial<User>) => {
    const newState = await userService.updateUserState(values);
    setUser!({...user, ...newState });
    toggleSlideOut();

    showToast('Successfully updated details');
  }
  return (
    <div className="max-h-screen overflow-y-hidden p-4">
       <h1 className="text-lg font-bold font-primary mb-4">Update user details</h1>
      <Formik initialValues={getSyndicatesForm()} validationSchema={getDealFormValidation()} onSubmit={onSubmit}>
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
  )
}
