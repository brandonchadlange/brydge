import { Header } from "@/components/Header";
import { ReactNode } from "react";

type OnboardingLayoutProps = {
  children: ReactNode;
};

const OnboardingLayout = (props: OnboardingLayoutProps) => {
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
          <p className="mt-2 text-sm text-gray-500">
            This user is also a
            <span className="text-blue">
              {" "}
              Merchant-Exporter, Importer, supplier, aggregator.
            </span>
          </p>
        </section>
        <section className="col-span-1 px-2 overflow-x-hidden overflow-y-auto">
          {props.children}
        </section>
      </main>
    </>
  );
};

export default OnboardingLayout;
