import Card from "@/components/card";
import AppTable, { AppTableColumn } from "@/components/table";
import queries from "@/frontend/utility/queries";
import { Beneficiary } from "@prisma/client";
import Link from "next/link";
import { useQuery } from "react-query";

const BeneficiaryTable = () => {
  const { getBeneficiaries } = queries;
  const beneficiaryQuery = useQuery("beneficiaries", getBeneficiaries);

  const beneficiaries = beneficiaryQuery.data || [];

  const columns: AppTableColumn<Beneficiary>[] = [
    {
      heading: "Beneficiary Name",
      name: "beneficiaryName",
      component: (data) => data.accountHolderName,
      headerClass: "font-semibold text-sm",
    },
    {
      heading: "Account type",
      name: "accountType",
      component: (data) => data.accountType,
      headerClass: "font-semibold text-sm",
    },
    {
      heading: "Country",
      name: "country",
      component: (data) => data.country,
      headerClass: "font-semibold text-sm",
    },
    {
      heading: "Currency",
      name: "currency",
      component: (data) => data.currency,
      headerClass: "font-semibold text-sm",
    },
  ];

  return <AppTable columns={columns} data={beneficiaries} />;
};

const BeneficiaryPage = () => {
  return (
    <main className="p-4 mt-20">
      <Card>
        <div className="flex justify-between mb-10 align-middle text-lg">
          <h1 className="font-semibold">Beneficiaries</h1>
          <Link
            href="/beneficiary/new"
            className="px-4 py-2 text-sm bg-gray-200 font-medium rounded-md"
          >
            Add New Beneficiary
          </Link>
        </div>
        <BeneficiaryTable />
      </Card>
    </main>
  );
};

export default BeneficiaryPage;
