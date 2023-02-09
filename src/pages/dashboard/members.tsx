import AppButton from "@/components/Button";
import Card from "@/components/card";
import AppTable, { AppTableColumn } from "@/components/table";
import DashboardLayout from "@/components/withDashboardLayout";
import withDashboardLayout from "@/components/withDashboardLayout";
import React from "react";

type Member = {
  id: string;
  lp: string;
  deal: string;
  carryPercent: string;
  status: string;
};

const MemberTable = () => {
  const columns: AppTableColumn<Member>[] = [
    {
      name: "lp",
      heading: "LP",
      component(data) {
        return <p className="font-bold">{data.lp}</p>;
      },
    },
    {
      name: "deal",
      heading: "Deal",
      component(e) {
        return <>{e.deal}</>;
      },
    },
    {
      name: "carryPercent",
      heading: "Carry %",
      component(e) {
        return <>{e.carryPercent}</>;
      },
    },
    {
      name: "status",
      heading: "Status",
      component(e) {
        return <>{e.status}</>;
      },
    },
  ];

  const data: Member[] = [
    {
      id: "1",
      lp: "Peter Graham",
      deal: "Fibre Importation",
      carryPercent: "10%",
      status: "Pending",
    },
    {
      id: "1",
      lp: "Gracie Montez",
      deal: "Fibre Importation",
      carryPercent: "10%",
      status: "Pending",
    },
  ];

  return <AppTable columns={columns} data={data}></AppTable>;
};

const Members = () => {
  return (
    <DashboardLayout>
      <div className={`container p-8 pt-20`}>
        <div className="flex justify-end">
          <AppButton type="button">Invite member</AppButton>
        </div>
        <Card className="mt-8">
          <MemberTable />
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Members;
