import Button from "@/components/Button";
import { Header } from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

type UserType = "merchant" | "funder";

const Onboarding = () => {
  const router = useRouter();
  const { push } = router;
  const [userType, setUserType] = useState<UserType>("funder");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userType === "merchant") {
      push("/onboarding/merchant");
    } else if (userType === "funder") {
      push("/onboarding/funder");
    }
  };

  return (
    <>
      <Header />
      <main className="w-fit px-4 mx-auto mt-12 h-[calc(100vh-80px)] flex flex-col items-center">
        <h1 className="text-2xl font-bold">Welcome to brydge 🎉</h1>
        <p className="my-5 text-dark-300">
          Choose your preferred option to get started
        </p>
        <form onSubmit={(e) => onSubmit(e)} className="mx-auto sm:w-2/3">
          <ul className="font-medium bg-white rounded-lg text-dark">
            <li className="w-full p-2 border border-gray-400 rounded-lg focus-within:border focus-within:border-dark-500">
              <div className="flex pl-3">
                <input
                  defaultValue="funder"
                  name="userType"
                  onChange={(e) => setUserType(e.target.value as UserType)}
                  type="radio"
                  value="funder"
                  id="list-funder-radio"
                  className="w-4 h-4 mt-4 bg-gray-600 border-gray-300 text-dark-600 accent-dark-400 focus:ring-dark-500"
                />
                <label
                  htmlFor="list-funder-radio"
                  className="w-full py-3 ml-5 text-sm font-medium text-gray-900"
                >
                  <span className="block font-bold text-md">Funder</span>
                  <span className="text-gray-500">
                    This can be an individual or institution funding merchants
                    involved in export, import, supply, and aggregation.
                  </span>
                </label>
              </div>
            </li>
            <li className="w-full p-2 mt-3 border border-gray-400 rounded-lg focus-within:border focus-within:border-dark-500">
              <div className="flex pl-3">
                <input
                  name="userType"
                  onChange={(e) => setUserType(e.target.value as UserType)}
                  type="radio"
                  value="merchant"
                  id="list-merchant-radio"
                  className="w-4 h-4 mt-4 bg-gray-600 border-gray-300 text-dark-600 accent-dark-400 focus:ring-dark-500"
                />
                <label
                  htmlFor="list-merchant-radio"
                  className="w-full py-3 ml-5 text-sm font-medium text-gray-900"
                >
                  <span className="block font-bold text-md">Merchant</span>
                  <span className="text-gray-500">
                    A Merchant is an Exporter, Importer, supplier or aggregator.
                  </span>
                </label>
              </div>
            </li>
          </ul>
          <Button type="submit" className="my-6" full>
            Continue
          </Button>
        </form>
      </main>
    </>
  );
};

export default Onboarding;
