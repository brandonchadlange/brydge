import EntityRegistrationForm from "./_form";
import OnboardingLayout from "./_layout";

const MerchantRegistration = () => {
  return (
    <OnboardingLayout>
      <EntityRegistrationForm entityType="merchant" />
    </OnboardingLayout>
  );
};

export default MerchantRegistration;
