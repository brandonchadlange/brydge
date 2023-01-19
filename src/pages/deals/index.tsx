import AppLayout from "@/components/app-layout";
import fetchDataAs from "@/frontend/utility/fetch-data-as";
import Link from "next/link";

type DealApiResponse = {
  id: string;
  name: string;
};

type DealClientModel = {
  name: string;
};

const Deals = () => {
  return (
    <AppLayout>
      <h1>Deals page</h1>
      <Link href="/deals/1">first deal</Link>
      <Link href="/deals/2">second deal</Link>
    </AppLayout>
  );
};

export default Deals;
