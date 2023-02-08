import Button from '@/components/Button';
import { Header } from '@/components/Header';
import Input from '@/components/input/';
import FormField from '@/components/input/FormField';
import Progress from '@/components/progress';
import businessService from '@/frontend/services/business';
import documentService from '@/frontend/services/document';
import states from '@/frontend/utility/nigerian-states';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2';
import * as Yup from 'yup';

const FILE_SIZE = 10000 * 1024;

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];

const getBusinessForm = () => {
  return {
    businessName: '',
    rcNumber: '',
    bvn: '',
    address: '',
    state: '',
    utilityBill: null,
  };
};

const getBusinessFormValidation = () => {
  return Yup.object().shape({
    businessName: Yup.string().required('Business name is required'),
    rcNumber: Yup.string().required('Registration number is required'),
    bvn: Yup.string()
      .required('BVN is required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .test('bvn', 'Must be exactly 10 characters', val => val?.length === 10),
    address: Yup.string().required('State is required'),
    state: Yup.string().required('State is required').oneOf(states, 'Select state'),
    utilityBill: Yup.mixed()
      .required('Please upload your utility bill')
      .test('fileSize', 'File is too large', value => value?.size <= FILE_SIZE)
      .test('fileType', 'Unsupported file format', value => SUPPORTED_FORMATS.includes(value?.type)),
  });
};

const Business = () => {
  const [utilityBill, setUtilityBill] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const onUtilityBillSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setUtilityBill(file);
    setUploading(true);
    const doc = await documentService.uploadDocument(file, setUploadProgress);
    setUploading(false);
  };

  const onSubmit = async (values: any) => {
    // Upload file to get utilityBillUrl
    const document = await documentService.uploadDocument(utilityBill!);

    const data = await businessService.createBusiness({
      registeredName: values.businessName,
      registrationNumber: values.rcNumber,
      bankVerificationNumber: values.bvn,
      operationalAddress: values.address,
      state: values.state,
      utilityBillUrl: document.publicUrl || '',
    });

    console.log(data);
  };

  return (
    <>
      <Header />
      <main className="grid justify-around gap-10 px-8 mt-8 lg:px-20 md:gap-32 font-primary md:grid-cols-2">
        <section className="col-span-1">
          <div className="px-8 py-4 mb-4 text-white rounded-lg lg:w-3/5 bg-dark">
            <p className="text-lg font-semibold mb">Business</p>
            <p className="text-sm text-gray-400">
              A group of persons that come together to invest. It is usually on a deal-by-deal basis.
            </p>
          </div>
          <div className="flex mb-4 lg:w-3/5">
            <div className="p-0 mr-2 border-l-4 rounded border-blue"></div>
            <button className="w-full px-6 py-3 bg-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600">
              Exisiting Business
            </button>
          </div>
          <Link href="#" className="font-semibold underline text-blue">
            Create a new business
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            This user is also a<span className="text-blue"> Merchant-Exporter, Importer, supplier, aggregator.</span>
          </p>
        </section>
        <section className="col-span-1 px-2 overflow-x-hidden overflow-y-auto">
          <Formik initialValues={getBusinessForm()} validationSchema={getBusinessFormValidation()} onSubmit={onSubmit}>
            {({ errors, setFieldValue, values, setFieldTouched }) => (
              <Form>
                <FormField label="Business Name">
                  <Input.Text placeholder="Name of Business" name="businessName" />
                </FormField>
                <FormField label="Registration Number">
                  <Input.Text placeholder="Enter RC Number" name="rcNumber" />
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
                    onChange={e => {
                      setFieldValue('utilityBill', e.currentTarget.files![0]);
                      onUtilityBillSelect(e);
                    }}
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
                {uploading && <Progress value={uploadProgress} />}
                {errors.utilityBill && <span className="text-red-500">{errors.utilityBill}</span>}

                <Button type="submit" full>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </>
  );
};

export default Business;
