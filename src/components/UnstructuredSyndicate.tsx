import React from 'react';

import Button from './Button';
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2';
import Input from './input/';
import FormField from './input/FormField';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import states from '@/frontend/utility/nigerian-states';

const FILE_SIZE = 10000 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];

const UnstructuredSyndicate = () => {
  const onSubmit = (values: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  const getSyndicateForm = () => {
    return {
      syndicateName: '',
      rcNumber: '',
      syndicateHead: '',
      bvn: '',
      address: '',
      state: '',
      utilityBill: null,
      acceptedTerms: false,
    };
  };
  const getSyndicateFormValidation = () => {
    return Yup.object().shape({
      syndicateName: Yup.string().required('Company name is required'),
      bvn: Yup.string().required('BVN is required'),
      address: Yup.string().required('Address is required'),
      state: Yup.string().required('State is required').oneOf(states, 'Select state'),
      utilityBill: Yup.mixed()
        .required('Please upload your utility bill')
        .test('fileSize', 'File is too large', value => value?.size <= FILE_SIZE)
        .test('fileType', 'Unsupported file format', value => SUPPORTED_FORMATS.includes(value?.type)),
      acceptedTerms: Yup.boolean().required().oneOf([true], 'Accept the terms and conditions.'),
    });
  };

  return (
    <Formik initialValues={getSyndicateForm()} validationSchema={getSyndicateFormValidation()} onSubmit={onSubmit}>
      {({ errors, values, setFieldValue, setFieldTouched }) => (
        <Form>
          <FormField label="Syndicate Name">
            <Input.Text placeholder="Name of syndicate" name="syndicateName" />
          </FormField>
          <FormField label="BVN">
            <Input.Text placeholder="Enter BVN" name="bvn" />
          </FormField>
          <FormField label="Address">
            <Input.TextArea placeholder="Enter street name and number" name="address"></Input.TextArea>
          </FormField>

          <FormField label="State">
            <Input.Select name="state">
              {states.length &&
                states.map(state => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </Input.Select>
          </FormField>

          <div className="flex px-5 py-3 mt-2 mb-4 border-2 border-dashed rounded-lg font-secondary bg-blue-50 border-blue">
            <label htmlFor="utilityBill">
              <HiOutlineDocumentArrowUp className="w-10 h-10 cursor-pointer text-blue" />
            </label>
            <input
              id="utilityBill"
              name="utilityBill"
              type="file"
              onBlur={() => setFieldTouched('utilityBill')}
              // onChange={event => {
              //   setFieldValue('utilityBill', event.currentTarget.files[0]);
              // }}
              className={'invisible hidden'}
            />
            <div className="flex flex-col ml-3 border-red-500 borde">
              <p className="font-bold text-md">
                {/* {values?.utilityBill?.name ? values?.utilityBill?.name : 'Click to upload'} */}
              </p>
              <p className="text-sm text-blue">Max 10MB</p>
            </div>
          </div>
          {errors.utilityBill && <span className="text-red-500">{errors.utilityBill}</span>}

          {/* <Input.Checkbox name="acceptedTerms">
            <p className="font-secondary text-[12px]">
              By clicking continue, I agree to brydge Terms and Conditions, Privacy Policy and Pricing
            </p>
          </Input.Checkbox> */}

          <Button type="submit" full>
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UnstructuredSyndicate;
