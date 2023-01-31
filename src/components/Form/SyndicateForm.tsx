import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { User } from '@prisma/client';
import Button from '../Button';
import Input from '../input';
import userService from '@/frontend/services/user';
import { UserContext } from '@/context';

export function SyndicateForm() {
  const { user, setUser } = useContext(UserContext);

  const { handleSubmit, isValid, isSubmitting } = useFormik<Partial<User>>({
    initialValues: {
      legalName: '',
       rcNumber: ''
    },
    async onSubmit(values) {
      const newState = await userService.updateUserState(values);
      setUser!({...user, ...newState });
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <Input.Text placeholder="Legal name" name="legalName" />
      <Input.Text placeholder="RC Number" name="rcNumber" />
      <Button type="submit" disabled={!isValid || isSubmitting}>Submit</Button>
    </form>
  )
}
