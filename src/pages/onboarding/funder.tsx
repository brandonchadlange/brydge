import OnboardingLayout, { EntityTab } from "@/components/onboarding/layout";

const MerchantRegistration = () => {
  const title = "Insitution or Individual";
  const subtitle =
    "A group of persons that come together to invest. It is usually on a deal-by-deal basis.";

  const tabs: EntityTab[] = [
    {
      entityType: "institution",
      heading: "Institution",
      text: "They are fund managers, High network individuals, and communities. Writing a maximum check size of $200,000. No minimum.",
    },
    {
      entityType: "individual",
      heading: "Individual",
      text: "",
    },
  ];

  return <OnboardingLayout title={title} subtitle={subtitle} tabs={tabs} />;
};

export default MerchantRegistration;
