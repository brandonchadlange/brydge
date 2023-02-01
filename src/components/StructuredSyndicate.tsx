import syndicateService from '@/frontend/services/syndicate';
import React from 'react';
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2';
import Button from './Button';
import Input from './input/';
import FormField from './input/form-field';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import * as Yup from 'yup';
import states from '@/frontend/utility/nigerian-states';

const FILE_SIZE = 10000 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];

const getSyndicateForm = () => {
  return {
    syndicateName: '',
    rcNumber: '',
    syndicateHead: '',
    bvn: '',
    address: '',
    state: '',
    utilityBill: null,
    // acceptedTerms: false,
  };
};

const getSyndicateFormValidation = () => {
  return Yup.object().shape({
    syndicateName: Yup.string().required('Company name is required'),
    rcNumber: Yup.string().required('Registration number is required'),
    bvn: Yup.string().required('BVN is required'),
    syndicateHead: Yup.string().required('Syndicate head is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required().oneOf(states, 'Select state'),
    utilityBill: Yup.mixed()
      .required('Please upload your utility bill')
      .test('fileSize', 'File is too large', value => value?.size <= FILE_SIZE)
      .test('fileType', 'Unsupported file format', value => SUPPORTED_FORMATS.includes(value?.type)),
    // acceptedTerms: Yup.boolean().required().oneOf([true], 'Accept the terms and conditions.'),
  });
};

const StructuredSyndicate = () => {
  const onSubmit = async (data: any) => {
    await syndicateService.createStructuredSyndicate(data);
  };

  return (
    <div className="max-h-screen overflow-y-hidden">
      <Formik initialValues={getSyndicateForm()} validationSchema={getSyndicateFormValidation()} onSubmit={onSubmit}>
        {({ errors, values, setFieldValue, setFieldTouched }) => (
          <Form>
            <FormField label="Syndicate Name">
              <Input.Text placeholder="Name of Syndicate" name="syndicateName" />
            </FormField>
            <FormField label="Registration Number">
              <Input.Text placeholder="Enter RC Number" name="rcNumber" />
            </FormField>
            <FormField label="Syndicate Head">
              <Input.Text placeholder="Enter Sydicate head's name" name="syndicateHead" />
            </FormField>
            <FormField label="BVN">
              <Input.Text placeholder="Enter BVN" name="bvn" />
            </FormField>
            <FormField label="Address">
              <Input.TextArea placeholder="Enter street name and number" name="address" />
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
                onChange={event => {
                  setFieldValue('utilityBill', event.currentTarget.files[0]);
                }}
                className={'invisible hidden'}
              />
              <div className="flex flex-col ml-3 border-red-500 borde">
                <p className="font-bold text-md">
                  {values?.utilityBill?.name ? values?.utilityBill?.name : 'Click to upload'}
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
    </div>
  );
};

export default StructuredSyndicate;
