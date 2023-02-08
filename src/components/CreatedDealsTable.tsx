import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Button from './Button';

import Card from './card';
import AppTable, { AppTableColumn } from './table';

interface CreatedDealsTableProps {
  className?: string;
}

interface Member {
  id: string;
  lp: string;
  deal: string;
  carryPercent: string;
  status: string;
};

interface Deal {
  name: string;
  description: string;
  members: Member[];
  amount: number;
}

const columns: AppTableColumn<Deal>[] = [
  {
    name: 'name',
    heading: 'Name | Description',
    headerClass: "font-medium text-gray-500 text-sm",
    component(data) {
      return <span className="text-sm">{data.name} | {data.description}</span>;
    },
  },
  {
    name: 'members',
    heading: 'Members',
    headerClass: "font-medium text-gray-500 text-sm",
    component(e) {
      return <>{e.members.length}</>;
    },
  },
  {
    name: 'amount',
    heading: 'Amount',
    headerClass: "font-medium text-gray-500 text-sm",
    component(e) {
      return <>{e.amount}</>;
    },
  },
  {
    name: 'actions',
    heading: 'Actions',
    headerClass: "font-medium text-gray-500 text-sm",
    component(e) {
      return <Button type="button">View</Button>;
    },
  },
];

const members: Member[] = [
  {
    id: '1',
    lp: 'Peter Graham',
    deal: 'Fibre Importation',
    carryPercent: '10%',
    status: 'Pending',
  },
  {
    id: '1',
    lp: 'Gracie Montez',
    deal: 'Fibre Importation',
    carryPercent: '10%',
    status: 'Pending',
  },
];

const deals: Deal[] = [
  {
    name: "Deal 1",
    description: "Deal description",
    members,
    amount: 1000,
  },
  {
    name: "Deal 2",
    description: "Deal 2 description",
    members,
    amount: 1000,
  },
];


const CreatedDealsTable = ({ className }: CreatedDealsTableProps) => {
  return (
    <Card className={`p-4 h-96 ${className}`}>
      <div className="flex justify-between font-medium mb-4">
        Created Deals
      </div>
      <AppTable columns={columns} data={[]}>
        <div className="flex flex-col items-center justify-center h-full w-full">
          <BsSearch />
          <div>Oops! You do not have any deals yet</div>
          <Button type="button" className="underline !bg-white text-black ">Create new Deal</Button>
        </div>
      </AppTable>
    </Card>
  );
};

export default CreatedDealsTable;
