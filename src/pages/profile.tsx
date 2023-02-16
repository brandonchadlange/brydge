import React, { useContext } from "react";
import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { HiOutlineTrash } from "react-icons/hi";

import Card from "@/components/card";
import AppTable, { AppTableColumn } from "@/components/table";
import DashboardLayout from "@/components/withDashboardLayout";
import { UserContext } from "@/context";
import Button from "@/components/Button";

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <DashboardLayout>
      <div className={`container p-8 pt-20`}>
        <Card className="mb-8 p-4 flex justify-between">
          <div className="flex">
            <Image className="rounded-lg mr-4" src="https://picsum.photos/200" alt="profile" width={32} height={32} />
            <div>
              <div className="font-medium text-lg">
                {user.name}
              </div>
                <div className="text-gray-400 text-sm">
                  ronniepryde@gmail.com
                </div>
            </div>
          </div>
          <Button  className="text-red-500 bg-red-200 !px-4 !py-2" type="button">Deactivate Account</Button>
        </Card>
        <Card className="h-[500px]">
          <Tabs className="h-full" selectedTabClassName="border-none bottom-border" selectedTabPanelClassName="test">
            <TabList>
              <Tab>All Members</Tab>
              <Tab>Active</Tab>
              <Tab>Pending</Tab>
              <Tab>Deleted</Tab>
            </TabList>

            <TabPanel>
              <MemberTable />
            </TabPanel>
            <TabPanel>
              <MemberTable />
            </TabPanel>
            <TabPanel>
              <MemberTable />
            </TabPanel>
            <TabPanel>
              <MemberTable />
            </TabPanel>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

interface Member {
  id: string;
  name: string;
  image: string;
  email: string;
  deal: string;
  carryPercent: string;
  status: "Pending" | "Accepted";
  amountContributed: number;
};


const MemberTable = () => {
  const columns: AppTableColumn<Member>[] = [
    {
      name: "lp",
      heading: "LP",
      headerClass: "font-medium text-gray-500 text-sm",
      cellClass: "pt-3",
      component(data) {
        return (
          <div className="flex items-center">
            <Image className="rounded-full mr-4" src={data.image} alt={data.name} width={32} height={32} />
            <div>
              <div className="font-medium">{data.name}</div>
              <div className="text-sm font-gray-300">{data.email}</div>
            </div>
          </div>
        );
      },
    },
    {
      name: "deal",
      heading: "Deal",
      headerClass: "font-medium text-gray-500 text-sm",
      cellClass: "pt-3",
      component(e) {
        return <span className="font-semibold">{e.deal}</span>;
      },
    },
    {
      name: "carryPercent",
      heading: "Carry %",
      headerClass: "font-medium text-gray-500 text-sm",
      cellClass: "pt-3",
      component(e) {
        return  <span className="font-semibold">{e.carryPercent}</span>;
      },
    },
    {
      name: "status",
      heading: "Status",
      headerClass: "font-medium text-gray-500 text-sm",
      cellClass: "pt-3",
      component(e) {
        return <span className="bg-amber-100 text-amber-600 font-medium text-sm px-4 py-1 rounded-full">{e.status}</span>;
      },
    },
    {
      name: "action",
      heading: "Action",
      headerClass: "font-medium text-gray-500 text-sm",
      component(e) {
        return <HiOutlineTrash className="text-2xl cursor-pointer" />;
      },
    },
  ];

  const data: Member[] = [
    {
      id: "1",
      name: "Peter Graham",
      image: "https://picsum.photos/200",
      email: "petergraham@gmail.com",
      deal: "Fibre Importation",
      carryPercent: "10%",
      status: "Pending",
      amountContributed: 20000,
    },
    {
      id: "2",
      name: "Gracie Montez",
      image: "https://picsum.photos/200",
      email: "petergraham@gmail.com",
      deal: "Fibre Importation",
      carryPercent: "10%",
      status: "Pending",
      amountContributed: 20000,
    },
  ];

  return <AppTable columns={columns} data={data} headerRowClass="mb-4"></AppTable>;
};

