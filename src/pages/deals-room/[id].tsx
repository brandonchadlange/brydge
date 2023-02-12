import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DashboardLayout from "@/components/withDashboardLayout";
import Progress from "@/components/progress";
import { Deal } from "../api/types";
import { formatToCurrency } from "@/utils/formatToCurrency";
import { formatDate } from "@/utils/formatDate";
import EmptyStateCard from "@/components/EmptyStateCard";
import Card from "@/components/card";
import AppTable, { AppTableColumn } from "@/components/table";

export default function DealRoom() {
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
        <DealDetailCard deal={deal} />
        <Card className="h-[500px]">
          <Tabs
            className="h-full"
            selectedTabClassName="border-none bottom-border"
            selectedTabPanelClassName="test"
          >
            <TabList>
              <Tab>Co Investors</Tab>
              <Tab>Documents</Tab>
              <Tab>Transactions</Tab>
            </TabList>

            <TabPanel>
              <EmptyStateCard
                message="Oops! You do not have any investors yet"
                buttonText="Invite Investor"
                onAddClick={() => {}}
              />
            </TabPanel>
            <TabPanel>
              <EmptyStateCard
                message="Oops! You do not have any investors yet"
                buttonText="Invite Investor"
                onAddClick={() => {}}
              />
            </TabPanel>
            <TabPanel>
              <EmptyStateCard
                message="Oops! You do not have any investors yet"
                buttonText="Invite Investor"
                onAddClick={() => {}}
              />
            </TabPanel>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
}

const DealDetailCard = ({ deal }: { deal: Deal }) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-8 mb-8">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-12 w-12 bg-gray-700 rounded-md flex items-center justify-center">
            <span className="text-white font-medium">
              {deal.name
                .split(" ")
                .map((part) => part.at(0))
                .join("")
                .toLocaleUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-lg font-medium">{deal.name}</h1>
            <p className="text-xs">{deal.description}</p>
          </div>
        </div>
        <div className="flex items-end gap-10 align-bottom">
          <div className="w-40 mb-2">
            <Progress value={70} />
          </div>
          <div>
            <h1 className="text-2xl font-medium">
              {formatToCurrency({
                value: deal.amount,
                currency: deal.currency,
              })}
            </h1>
            <p className="text-[10px]">Amount Raised</p>
          </div>
        </div>
      </div>
      <hr className="text-gray-500 my-2 h-1" />
      <div className="flex justify-between py-4">
        <div className="flex gap-10">
          <div>
            <h3>30%</h3>
            <p className="text-xs font-medium text-gray-500">Lead Allocation</p>
          </div>
          <div>
            <h3>{formatDate(deal.createdDate)}</h3>
            <p className="text-xs font-medium text-gray-500">Closing Date</p>
          </div>
          <div>
            <h3>4</h3>
            <p className="text-xs font-medium text-gray-500">Co Investors</p>
          </div>
          <div>
            <h3>Raising</h3>
            <p className="text-xs font-medium text-gray-500">Status</p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <button className="rounded-md bg-red-200 text-red-400 px-6 text-sm">
            Deactivate
          </button>
          <button className="rounded-md bg-black text-white px-6 text-sm">
            Fund Deal
          </button>
        </div>
      </div>
    </div>
  );
};
