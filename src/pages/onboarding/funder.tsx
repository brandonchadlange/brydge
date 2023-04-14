import OnboardingLayout, { EntityTab } from "@/components/onboarding/layout";

const MerchantRegistration = () => {
  const title = "Funder";
  const subtitle =
    "This can be an individual or institution funding merchants involved in export, import, supply, and aggregation.";

  const tabs: EntityTab[] = [
    {
      entityType: "institution",
      heading: "Institution",
      text: "Companies funding merchants and providing trade finance.",
    },
    {
      entityType: "individual",
      heading: "Individual",
      text: "Individuals who fund merchants.",
    },
  ];

  return <OnboardingLayout title={title} subtitle={subtitle} tabs={tabs} />;
};

export default MerchantRegistration;
