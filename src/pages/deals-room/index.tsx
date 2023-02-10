import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Card from "@/components/card";
import AppTable, { AppTableColumn } from "@/components/table";
import DashboardLayout from "@/components/withDashboardLayout";
import { Deal } from "../api/types";
import AppButton from "@/components/Button";
import Slideout from "@/components/slide-out";
import { useState } from "react";

export default function DealRoom() {
  const [show, setShow] = useState(false);

  const deal: Deal = {
    id: Math.round(Math.random() * 100000).toString(),
    name: "Deal 1",
    createdDate: Date.now(),
    description: "Deal description",
    competed: 70,
    members: [],
    amount: 60000,
    currency: "USD",
    goalAmount: 70000,
  };

  return (
    <DashboardLayout>
      <div className="rounded-md p-8 pt-10">
        <div className="flex justify-end">
          <AppButton onClick={() => setShow(true)} type="button">
            Create New Deal
          </AppButton>
        </div>
        <Card className="h-[500px] mt-4">
          <Tabs
            className="h-full"
            selectedTabClassName="border-none bottom-border"
            selectedTabPanelClassName="test"
          >
            <TabList>
              <Tab>All Deals</Tab>
              <Tab>Active</Tab>
              <Tab>Pending Review</Tab>
              <Tab>Denied</Tab>
            </TabList>

            <TabPanel>
              <DealTable />
              {/* <EmptyStateCard message="Oops! You do not have any investors yet" buttonText="Invite Investor" onAddClick={() => { }} /> */}
            </TabPanel>
            <TabPanel>
              <DealTable />
              {/* <EmptyStateCard message="Oops! You do not have any investors yet" buttonText="Invite Investor" onAddClick={() => { }} /> */}
            </TabPanel>
            <TabPanel>
              <DealTable />
              {/* <EmptyStateCard message="Oops! You do not have any investors yet" buttonText="Invite Investor" onAddClick={() => { }} /> */}
            </TabPanel>
            <TabPanel>
              <DealTable />
              {/* <EmptyStateCard message="Oops! You do not have any documents uploaded yet" buttonText="Create new Deal" onAddClick={() => { }} /> */}
            </TabPanel>
          </Tabs>
        </Card>
        <Slideout show={show} setShow={setShow}></Slideout>
      </div>
    </DashboardLayout>
  );
}

type DealTableColumn = {
  name: string;
  coInvestors: string[];
  carryPercentage: number;
  status: string;
  amountInvested: number;
};

const dummyData: DealTableColumn[] = [
  {
    name: "Fibre importation",
    coInvestors: ["John", "Jane", "Mary"],
    carryPercentage: 20,
    amountInvested: 20000,
    status: "Raising",
  },
  {
    name: "Nickel export",
    coInvestors: ["John", "Mary"],
    carryPercentage: 20,
    amountInvested: 20000,
    status: "Raising",
  },
];

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "symbol",
});

type DealTableColums = AppTableColumn<DealTableColumn>[];

const DealTable = () => {
  const columns: DealTableColums = [
    {
      name: "name",
      heading: "Deal name",
      component: (data) => data.name,
    },
    {
      name: "coInvestors",
      heading: "Co investors",
      component: (data) => (
        <div className="flex">
          {data.coInvestors.map((coInv) => (
            <AvatarImage key={coInv} />
          ))}
        </div>
      ),
    },
    {
      name: "coInvestors",
      heading: "You Carry %",
      component: (data) => data.carryPercentage + "%",
    },
    {
      name: "status",
      heading: "Status",
      component: (data) => <StatusChip status={data.status} />,
    },
    {
      name: "amountInvested",
      heading: "Amount invested",
      component: (data) => currencyFormat.format(data.amountInvested),
    },
    {
      name: "action",
      heading: "Action",
      component: (data) => "",
    },
  ];

  return <AppTable columns={columns} data={dummyData} />;
};

const AvatarImage = () => {
  return (
    <div className="rounded-full h-8 w-8 bg-blue-400 border border-white"></div>
  );
};

const StatusChip = ({ status }: { status: string }) => {
  return (
    <div className="px-2 py-1 bg-orange-100 text-orange-400 rounded-full text-center text-sm">
      {status}
    </div>
  );
};

// const DealDetailCard = () => {
//   return (        <div className="bg-white rounded-md shadow-sm p-8 mb-8">
//   <div className="flex justify-between">
//     <div className="flex gap-2">
//       <div className="h-12 w-12 bg-gray-700 rounded-md flex items-center justify-center">
//         <span className="text-white font-medium">{deal.name.split(' ').map(part => part.at(0)).join('').toLocaleUpperCase()}</span>
//       </div>
//       <div>
//         <h1 className="text-lg font-medium">{deal.name}</h1>
//         <p className="text-xs">{deal.description}</p>
//       </div>
//     </div>
//     <div className="flex items-end gap-10 align-bottom">
//       <div className="w-40 mb-2">
//         <Progress value={70} />
//       </div>
//       <div>
//         <h1 className="text-2xl font-medium">{formatToCurrency({ value: deal.amount, currency: deal.currency })}</h1>
//         <p className="text-[10px]">Amount Raised</p>
//       </div>
//     </div>
//   </div>
//   <hr className="text-gray-500 my-2 h-1" />
//   <div className="flex justify-between p-4">
//     <div className="flex gap-10">
//       <div>
//         <h3>30%</h3>
//         <p className="text-xs font-medium text-gray-500">Lead Allocation</p>
//       </div>
//       <div>
//         <h3>{formatDate(deal.createdDate)}</h3>
//         <p className="text-xs font-medium text-gray-500">Closing Date</p>
//       </div>
//       <div>
//         <h3>4</h3>
//         <p className="text-xs font-medium text-gray-500">Co Investors</p>
//       </div>
//       <div>
//         <h3>Raising</h3>
//         <p className="text-xs font-medium text-gray-500">Status</p>
//       </div>
//     </div>
//     <button className="rounded-md bg-red-200 text-red-400 px-6 text-sm">Deactivate</button>
//   </div>
// </div>)
// }
