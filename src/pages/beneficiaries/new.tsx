import queries from "@/frontend/utility/queries";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Form, Formik, useField } from "formik";
import axios from "axios";
import { useRouter } from "next/router";
import OverlayLoader, { useOverlayLoader } from "@/components/overlay-loader";
import showToast from "@/frontend/utility/show-toast";

const KenyaDetailsForm = ({
  show,
  setFieldValue,
}: {
  show: boolean;
  setFieldValue: (field: string, value: any) => void;
}) => {
  const { getBanksByCountryCode } = queries;
  const banksQuery = useQuery("banks", () => getBanksByCountryCode("KE"));

  const [selectedBank, setSelectedBank] = useState("");
  const [fAccountNumber, mAccountNumber] = useField({
    name: "accountNumber",
  });

  const [fAccountHolder, mAccountHolder] = useField({
    name: "accountHolderName",
  });

  const [fSwiftCode, mSwiftCode] = useField({
    name: "swiftCode",
  });

  const [fSortCode, mSortCode] = useField({
    name: "sortCode",
  });

  const [fEmail, mEmail] = useField({
    name: "email",
  });

  const banks = banksQuery.data || [];

  useEffect(() => {
    if (banks.length > 0 && selectedBank === "") {
      console.log(banks[0]);
      setSelectedBank(banks[0].id.toString());
    }
  }, [banks]);

  useEffect(() => {
    if (selectedBank === "") return;

    const bank = banks.find((e) => e.id.toString() === selectedBank);
    setFieldValue("bankName", bank.name);
    setFieldValue("bankCode", bank.code);
  }, [selectedBank]);

  if (!show) return <></>;

  return (
    <>
      <div className="mt-4">
        <select
          className="border px-2 py-2 rounded-md w-80"
          placeholder="Bank"
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
        >
          {banks.map((bank) => (
            <option key={bank.id} value={bank.id}>
              {bank.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <input
          placeholder="Account Number"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
          {...fAccountNumber}
          {...mAccountNumber}
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Account Holder Name"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
          {...fAccountHolder}
          {...mAccountHolder}
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Swift Code"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
          {...fSwiftCode}
          {...mSwiftCode}
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Sort Code"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
          {...fSortCode}
          {...mSortCode}
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Email"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
          {...fEmail}
          {...mEmail}
        />
      </div>
    </>
  );
};

const KenyaIndividualDetails = ({ show }: { show: boolean }) => {
  const [fFirstName, mFirstName] = useField({
    name: "firstName",
  });

  const [fLastName, mLastName] = useField({
    name: "lastName",
  });

  if (!show) return <></>;

  return (
    <>
      <div className="mt-4">
        <input
          placeholder="First Name"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
          {...fFirstName}
          {...mFirstName}
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Last Name"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
          {...fLastName}
          {...mLastName}
        />
      </div>
    </>
  );
};

const UnitedStatesDetails = ({ show }: { show: boolean }) => {
  if (!show) return <></>;

  return (
    <>
      <div className="mt-4">
        <input
          placeholder="Address"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="State"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="City"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Zip Code"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Bank Address"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Bank State"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Bank City"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Bank Zip Code"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Account Number / IBAN"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Beneficiary Name"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Swift Code"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Routing Number"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Email"
          className="border px-2 py-2 rounded-md w-80"
          type="text"
        />
      </div>
    </>
  );
};

const BeneficiaryAddPage = () => {
  const router = useRouter();
  const loader = useOverlayLoader();
  const [country, setCountry] = useState("");
  const [accountType, setAccountType] = useState("");

  const onCountryChange = (country: string) => {
    if (country === "US") {
      setAccountType("corporate");
    }

    setCountry(country);
  };

  const showKenyaDetails = country === "KE" && accountType !== "";
  const showKenyaIndividualDetails =
    country === "KE" && accountType === "individual";
  const showUnitedStatesDetails = country === "US";

  const onFormSubmit = async (detail: any) => {
    loader.show();

    const request = {
      country,
      type: accountType,
      detail,
    };

    await axios.post("/api/beneficiary", request);
    loader.hide();
    showToast("Beneficiary successfully created!", {
      type: "success",
    });
    router.push("/beneficiary");
  };

  return (
    <main className="p-4 overflow-y-auto">
      <Formik initialValues={{}} onSubmit={onFormSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <div>
              <select
                className="border px-2 py-2 rounded-md w-80"
                placeholder="Select a country"
                value={country}
                onChange={(e) => onCountryChange(e.target.value)}
              >
                <option disabled value="">
                  -- Select country --
                </option>
                <option value="KE">Kenya</option>
                <option value="US">United States of America</option>
              </select>
            </div>
            {country !== "" && (
              <>
                {country !== "US" && (
                  <>
                    <div className="mt-4">
                      <select
                        className="border px-2 py-2 rounded-md w-80"
                        placeholder="Select account type"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                      >
                        <option disabled value="">
                          -- Select account type --
                        </option>
                        <option value="corporate">Corporate</option>
                        <option value="individual">Individual</option>
                      </select>
                    </div>
                  </>
                )}
                <KenyaIndividualDetails show={showKenyaIndividualDetails} />
                <KenyaDetailsForm
                  setFieldValue={setFieldValue}
                  show={showKenyaDetails}
                />
                <UnitedStatesDetails show={showUnitedStatesDetails} />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-gray-200 font-medium rounded-md mt-4"
                >
                  Submit
                </button>
              </>
            )}
          </Form>
        )}
      </Formik>
      <OverlayLoader controller={loader} />
    </main>
  );
};

export default BeneficiaryAddPage;
