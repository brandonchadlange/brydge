import Button from "@/components/Button";
import { Header } from "@/components/Header";
import Input from "@/components/input/";
import FormField from "@/components/input/FormField";
import Overlay from "@/components/overlay";
import businessService from "@/frontend/services/business";
import documentService from "@/frontend/services/document";
import states from "@/frontend/utility/nigerian-states";
import showToast from "@/frontend/utility/show-toast";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { Bars } from "react-loader-spinner";
import * as Yup from "yup";

const FILE_SIZE = 10000 * 1024;

const SUPPORTED_FORMATS = ["application/pdf"];

const getBusinessForm = () => {
  return {
    registeredName: "",
    registrationNumber: "",
    bankVerificationNumber: "",
    operationalAddress: "",
    state: "",
    utilityBillUrl: "",
    meansOfIdUrl: "",
    bankStatementUrl: "",
  };
};

const getBusinessFormValidation = () => {
  return Yup.object().shape({
    registeredName: Yup.string().required("Business name is required"),
    registrationNumber: Yup.string().required(
      "Registration number is required"
    ),
    bankVerificationNumber: Yup.string()
      .required("BVN is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .test(
        "bvn",
        "Must be exactly 10 characters",
        (val) => val?.length === 10
      ),
    operationalAddress: Yup.string().required("Address is required"),
    state: Yup.string()
      .required("State is required")
      .oneOf(states, "Select state"),
    utilityBill: Yup.mixed()
      .required("Please upload your utility bill")
      .test(
        "fileSize",
        "File is too large",
        (value) => value?.size <= FILE_SIZE
      )
      .test("fileType", "Unsupported file format", (value) =>
        SUPPORTED_FORMATS.includes(value?.type)
      ),
    meansOfId: Yup.mixed()
      .required("Please upload your utility bill")
      .test(
        "fileSize",
        "File is too large",
        (value) => value?.size <= FILE_SIZE
      )
      .test("fileType", "Unsupported file format", (value) =>
        SUPPORTED_FORMATS.includes(value?.type)
      ),
    bankStatement: Yup.mixed()
      .required("Please upload your utility bill")
      .test(
        "fileSize",
        "File is too large",
        (value) => value?.size <= FILE_SIZE
      )
      .test("fileType", "Unsupported file format", (value) =>
        SUPPORTED_FORMATS.includes(value?.type)
      ),
  });
};

const Business = () => {
  const [utilityBill, setUtilityBill] = useState<File | null>(null);
  const [meansOfId, setMeansOfId] = useState<File | null>(null);
  const [bankStatement, setBankStatement] = useState<File | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const router = useRouter();

  const onUtilityBillSelect = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files![0];
    setUtilityBill(file);
  };

  const onMeansOfIdSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setMeansOfId(file);
  };

  const onBankStatementSelect = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files![0];
    setBankStatement(file);
  };

  const uploadDocuments = async () => {
    const [utilityBillDoc, meansOfIdDoc, bankStatementDoc] = await Promise.all([
      documentService.uploadDocument(utilityBill!),
      documentService.uploadDocument(meansOfId!),
      documentService.uploadDocument(bankStatement!),
    ]);

    return {
      utilityBillDocument: utilityBillDoc,
      meansOfIdDocument: meansOfIdDoc,
      bankStatementDocument: bankStatementDoc,
    };
  };

  const onSubmit = async (values: any) => {
    setLoading(true);

    const { utilityBillDocument, meansOfIdDocument, bankStatementDocument } =
      await uploadDocuments();

    try {
      await businessService.createBusiness({
        registeredName: values.registeredName,
        registrationNumber: values.registrationNumber,
        bankVerificationNumber: values.bankVerificationNumber,
        operationalAddress: values.operationalAddress,
        state: values.state,
        utilityBillUrl: utilityBillDocument.publicUrl || "",
        meansOfIdUrl: meansOfIdDocument.publicUrl || "",
        bankStatementUrl: bankStatementDocument.publicUrl || "",
      });
      setLoading(false);
      showToast("Business successfully created!");
      router.push("/dashboard");
    } catch (e) {
      setLoading(false);
      showToast("Oops! Something went wrong. Please try again");
    }
  };

  return (
    <>
      <Header />
      <main className="grid justify-around gap-10 px-8 mt-8 lg:px-20 md:gap-32 font-primary md:grid-cols-2">
        <section className="col-span-1">
          <div className="px-8 py-4 mb-4 text-white rounded-lg lg:w-3/5 bg-dark">
            <p className="text-lg font-semibold mb">Business</p>
            <p className="text-sm text-gray-400">
              A group of persons that come together to invest. It is usually on
              a deal-by-deal basis.
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
            This user is also a
            <span className="text-blue">
              {" "}
              Merchant-Exporter, Importer, supplier, aggregator.
            </span>
          </p>
        </section>
        <section className="col-span-1 px-2 overflow-x-hidden overflow-y-auto">
          <Formik
            initialValues={getBusinessForm()}
            validationSchema={getBusinessFormValidation()}
            onSubmit={onSubmit}
          >
            {({ errors, setFieldValue, values, setFieldTouched }) => (
              <Form>
                <FormField label="Business Name">
                  <Input.Text
                    placeholder="Name of Business"
                    name="registeredName"
                  />
                </FormField>
                <FormField label="Registration Number">
                  <Input.Text
                    placeholder="Enter RC Number"
                    name="registrationNumber"
                  />
                </FormField>
                <FormField label="BVN">
                  <Input.Text
                    placeholder="Enter BVN"
                    name="bankVerificationNumber"
                  />
                </FormField>
                <FormField label="Address">
                  <Input.TextArea
                    placeholder="Enter street name and number"
                    name="operationalAddress"
                  ></Input.TextArea>
                </FormField>
                <FormField label="State">
                  <Input.Select name="state">
                    {states.length &&
                      states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                  </Input.Select>
                </FormField>
                <FormField label="Utility Bill">
                  <div className="flex px-5 py-3 mt-2 mb-4 border-2 border-dashed rounded-lg font-secondary bg-blue-50 border-blue">
                    <label htmlFor="utilityBill">
                      <HiOutlineDocumentArrowUp className="w-10 h-10 cursor-pointer text-blue" />
                    </label>
                    <input
                      id="utilityBill"
                      name="utilityBill"
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => {
                        setFieldValue("utilityBill", e.currentTarget.files![0]);
                        onUtilityBillSelect(e);
                      }}
                      onBlur={() => setFieldTouched("utilityBill")}
                      className={"invisible hidden"}
                    />
                    <div className="flex flex-col ml-3 border-red-500 borde">
                      <p className="font-bold text-md">
                        {utilityBill?.name
                          ? utilityBill?.name
                          : "Click to upload"}
                      </p>
                      <p className="text-sm text-blue">Max 10MB</p>
                    </div>
                  </div>
                  {errors.utilityBillUrl && (
                    <span className="text-red-500">
                      {errors.utilityBillUrl}
                    </span>
                  )}
                </FormField>

                <FormField label="Means of Id">
                  <div className="flex px-5 py-3 mt-2 mb-4 border-2 border-dashed rounded-lg font-secondary bg-blue-50 border-blue">
                    <label htmlFor="meansOfId">
                      <HiOutlineDocumentArrowUp className="w-10 h-10 cursor-pointer text-blue" />
                    </label>
                    <input
                      id="meansOfId"
                      name="meansOfId"
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => {
                        setFieldValue("meansOfId", e.currentTarget.files![0]);
                        onMeansOfIdSelect(e);
                      }}
                      onBlur={() => setFieldTouched("meansOfId")}
                      className={"invisible hidden"}
                    />
                    <div className="flex flex-col ml-3 border-red-500 borde">
                      <p className="font-bold text-md">
                        {meansOfId?.name ? meansOfId?.name : "Click to upload"}
                      </p>
                      <p className="text-sm text-blue">Max 10MB</p>
                    </div>
                  </div>
                  {errors.meansOfIdUrl && (
                    <span className="text-red-500">{errors.meansOfIdUrl}</span>
                  )}
                </FormField>

                <FormField label="Bank Statement">
                  <div className="flex px-5 py-3 mt-2 mb-4 border-2 border-dashed rounded-lg font-secondary bg-blue-50 border-blue">
                    <label htmlFor="bankStatement">
                      <HiOutlineDocumentArrowUp className="w-10 h-10 cursor-pointer text-blue" />
                    </label>
                    <input
                      id="bankStatement"
                      name="bankStatement"
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => {
                        setFieldValue(
                          "bankStatement",
                          e.currentTarget.files![0]
                        );
                        onBankStatementSelect(e);
                      }}
                      onBlur={() => setFieldTouched("bankStatement")}
                      className={"invisible hidden"}
                    />
                    <div className="flex flex-col ml-3 border-red-500 borde">
                      <p className="font-bold text-md">
                        {bankStatement?.name
                          ? bankStatement?.name
                          : "Click to upload"}
                      </p>
                      <p className="text-sm text-blue">Max 10MB</p>
                    </div>
                  </div>
                  {errors.bankStatementUrl && (
                    <span className="text-red-500">
                      {errors.bankStatementUrl}
                    </span>
                  )}
                </FormField>

                {loading && (
                  <Overlay show>
                    <div className="h-full flex flex-col align-middle">
                      <Bars
                        height="80"
                        width="80"
                        color="#1d1d1d"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass="m-auto"
                        visible={true}
                      />
                    </div>
                  </Overlay>
                )}

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
