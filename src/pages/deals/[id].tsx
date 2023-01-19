import AppLayout from "@/components/app-layout";
import { useRouter } from "next/router";

const Deals = () => {
  const { query, push } = useRouter();
  const dealId = query.id as string;

  return (
    <AppLayout>
      <h1>Deals page {dealId}</h1>
    </AppLayout>
  );
};

export default Deals;
