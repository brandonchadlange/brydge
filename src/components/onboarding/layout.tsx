import { Header } from "@/components/Header";
import { ReactNode, useState } from "react";
import EntityRegistrationForm from "./form";

export type EntityTab = {
  entityType: EntityType;
  heading: string;
  text: string;
};

type OnboardingLayoutProps = {
  title: string;
  subtitle: string;
  tabs: EntityTab[];
};

const OnboardingLayout = (props: OnboardingLayoutProps) => {
  const [entityType, setEntityType] = useState<EntityType>(
    props.tabs[0].entityType
  );

  return (
    <>
      <Header />
      <main className="grid justify-around gap-10 px-8 mt-8 lg:px-20 md:gap-32 font-primary md:grid-cols-2">
        <section className="col-span-1">
          <div className="px-8 py-4 mb-4 text-white rounded-lg lg:w-3/5 bg-dark">
            <p className="text-lg font-semibold mb">{props.title}</p>
            <p className="text-sm text-gray-400">{props.subtitle}</p>
          </div>
          {props.tabs.map((tab) => (
            <div className="flex mb-4 lg:w-3/5" key={tab.entityType}>
              <div className="p-0 mr-2 border-l-4 rounded border-blue"></div>
              <button
                onClick={() => setEntityType(tab.entityType)}
                className="text-left w-full px-6 py-3 bg-gray-200 border border-black rounded-lg cursor-pointer focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
              >
                <p className="text-lg font-semibold mb">{tab.heading}</p>
                <p className="text-xs text-gray-500">{tab.text}</p>
              </button>
            </div>
          ))}
          <p className="mt-2 text-sm text-gray-500">
            This user is also a
            <span className="text-blue">
              {" "}
              Merchant-Exporter, Importer, supplier, aggregator.
            </span>
          </p>
        </section>
        <section className="col-span-1 px-2 overflow-x-hidden overflow-y-auto">
          <EntityRegistrationForm entityType={entityType} />
        </section>
      </main>
    </>
  );
};

export default OnboardingLayout;
