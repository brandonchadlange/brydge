import Card from "@/components/card";
import AppTable, { AppTableColumn } from "@/components/table";
import queries from "@/frontend/utility/queries";
import { Beneficiary } from "@prisma/client";
import Link from "next/link";
import { useQuery } from "react-query";

import KELogo from "@/assets/images/ke_logo.png";
import USLogo from "@/assets/images/us_logo.png";
import Image from "next/image";

const BeneficiaryTable = () => {
  const { getBeneficiaries } = queries;
  const beneficiaryQuery = useQuery("beneficiaries", getBeneficiaries);

  const beneficiaries = beneficiaryQuery.data || [];

  const columns: AppTableColumn<Beneficiary>[] = [
    {
      heading: "Name",
      name: "beneficiaryName",
      component: (data) => {
        const imageSrc = data.country === "KE" ? KELogo : USLogo;

        return (
          <div className="flex gap-2 font-secondary text-sm font-medium">
            <div>
              <Image alt="country logo" src={KELogo} height={20} />
            </div>
            <div>
              <p>{data.accountHolderName}</p>
            </div>
          </div>
        );
      },
      headerClass: "font-semibold text-sm",
    },
    {
      heading: "Account no.",
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
    <main className="p-4 mt-16">
      <Card>
        <div className="flex justify-between mb-10 align-middle text-lg">
          <h1 className="font-semibold">Beneficiaries</h1>
          <Link
            href="/beneficiaries/new"
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
