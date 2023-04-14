import Card from "@/components/card";
import queries from "@/frontend/utility/queries";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const BeneficiaryDetailPage = () => {
  const route = useRouter();
  const { getBeneficiary } = queries;

  const beneficiaryQuery = useQuery(
    "beneficiary",
    () => getBeneficiary(route.query.id as string),
    {
      enabled: route.query.id !== undefined,
    }
  );

  const beneficiary = beneficiaryQuery.data?.data;

  if (beneficiaryQuery.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-semibold">Beneficiary Details</h1>
          <p>View and manage beneficiary</p>
        </div>
        <div className="flex gap-2">
          <div>
            <button className="px-4 py-2 text-sm bg-gray-300 shadow-sm font-medium rounded-md">
              Make payout
            </button>
          </div>
          <div>
            <button className="px-4 py-2 text-sm bg-red-500 text-white font-medium rounded-md">
              Delete beneficiary
            </button>
          </div>
        </div>
      </div>
      <Card className="mt-5">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="text-md font-primary font-medium">
            {beneficiary?.accountHolderName}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-10 mt-5">
          <div>
            <p className="text-sm text-gray-500">Account Number</p>
            <p className="text-sm font-primary font-medium">
              {beneficiary?.destinationAddress}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Beneficiary Type</p>
            <p className="text-sm font-primary font-medium">
              {beneficiary?.type}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-10 mt-5">
          <div>
            <p className="text-sm text-gray-500">Bank</p>
            <p className="text-sm font-primary font-medium">
              {beneficiary?.bank.name}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">SWIFT Code</p>
            <p className="text-sm font-primary font-medium">
              {beneficiary?.bank.swiftCode}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Sort Code</p>
            <p className="text-sm font-primary font-medium">
              {beneficiary?.bank.sortCode}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-sm font-primary font-medium">
              {beneficiary?.bank.address.country}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Currency</p>
            <p className="text-sm font-primary font-medium">
              {beneficiary?.currency}
            </p>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default BeneficiaryDetailPage;
