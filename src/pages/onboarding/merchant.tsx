import OnboardingLayout, { EntityTab } from "@/components/onboarding/layout";

const MerchantRegistration = () => {
  const title = "Merchant";
  const subtitle =
    "A Merchant  is an Exporter, Importer, supplier or aggregator.";

  const tabs: EntityTab[] = [
    {
      entityType: "merchant",
      heading: "Existing Business",
      text: "Commodity Business. It has been in operation for a minimum of 2 years.",
    },
  ];

  return <OnboardingLayout title={title} subtitle={subtitle} tabs={tabs} />;
};

export default MerchantRegistration;
