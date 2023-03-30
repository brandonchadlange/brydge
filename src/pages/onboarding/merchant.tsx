import EntityRegistrationForm from "@/components/onboarding/form";
import OnboardingLayout from "@/components/onboarding/layout";

const MerchantRegistration = () => {
  return (
    <OnboardingLayout>
      <EntityRegistrationForm entityType="merchant" />
    </OnboardingLayout>
  );
};

export default MerchantRegistration;
