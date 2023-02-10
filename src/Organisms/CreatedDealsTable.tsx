import React from 'react';
import Image from 'next/image';
import { BsSearch, BsPlusLg } from 'react-icons/bs';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';


import Button from '@/components/Button';
import Card from '@/components/card';
import EmptyStateCard from '@/components/EmptyStateCard';
import AppTable, { AppTableColumn } from '@/components/table';

import { Deal, Member } from '@/pages/api/types';
import { formatDate } from '@/utils/formatDate';

interface CreatedDealsTableProps {
  className?: string;
  onCreateDeal: () => void;
}

const columns: AppTableColumn<Deal>[] = [
  {
    name: 'name',
    heading: 'Name | Description',
    headerClass: "font-medium text-gray-500 text-sm",
    component(data) {
      return (
        <div className="flex items-center">
          <CircularProgressbar
            className="h-12 !w-12"
            value={data.competed}
            text={`${data.competed}%`}
            styles={{
              path: {
                stroke: 'black',
              },
              text: {
                fill: 'black',
              }
            }}
          />
          <div className="text-sm ml-4">
            <div>{data.name}</div>
            <div className="text-gray-400 text-xs">{data.description}</div>
          </div>
        </div>
      );
    },
  },
  {
    name: 'members',
    heading: 'Members',
    headerClass: "font-medium text-gray-500 text-sm",
    component(e) {
      return (
        <div className="flex">
          {
            e.members.slice(0, 5).map(member => (
              <Image
                key={member.id}
                className="rounded-full -ml-2 border-2 border-white"
                src={member.image}
                alt={member.name}
                width={48}
                height={48}
              />
            ))
          }
          {
            !!e.members.slice(5).length && (
              <div className="rounded-full w-12 h-12 -ml-2 border-2 bg-gray-300 border-white flex items-center justify-center">
                <BsPlusLg className="text-gray-400 text-sm" />
              </div>
            )
          }
          
        </div>
      );
    },
  },
  {
    name: 'createdDate',
    heading: 'Created Date',
    headerClass: "font-medium text-gray-500 text-sm",
    component(e) {
      return formatDate(e.createdDate);
    },
  },
  {
    name: 'amount',
    heading: 'Amount',
    headerClass: "font-medium text-gray-500 text-sm",
    component(e) {
      return (
        <div>
          <div className="font-semibold text-lg">
            {e.currency} {e.amount}
          </div>
          <div className="text-xs text-gray-400">
          {e.currency} {e.goalAmount} Goal
          </div>
        </div>
      );
    },
  },
  {
    name: 'action',
    heading: 'Action',
    headerClass: "font-medium text-gray-500 text-sm",
    component(e) {
      return <Button type="button">View</Button>;
    },
  },
];

const members: Member[] = [
  {
    id: Math.round(Math.random() * 100000).toString(),
    name: 'Peter Graham',
    dealId: '2',
    image: 'https://picsum.photos/200',
    carryPercent: '10%',
    status: 'Pending',
  },
  {
    id: Math.round(Math.random() * 100000).toString(),
    name: 'Gracie Montez',
    dealId: '1',
    image: 'https://picsum.photos/200',
    carryPercent: '10%',
    status: 'Pending',
  },
];

const deals: Deal[] = [
  {
    id: Math.round(Math.random() * 100000).toString(),
    createdDate: Date.now(),
    name: 'Deal 1',
    description: 'Deal description',
    competed: 70,
    members,
    amount: 60000,
    currency: '$',
    goalAmount: 70000
  },
  {
    id: Math.round(Math.random() * 100000).toString(),
    name: 'Deal 2',
    createdDate: Date.now(),
    description: 'Deal 2 description',
    members,
    competed: 50,
    amount: 25000,
    currency: '$',
    goalAmount: 50000
  },
];

export default function CreatedDealsTable({ className, onCreateDeal }: CreatedDealsTableProps) {
  return (
    <Card className={`p-4 h-96 ${className}`}>
      <div className="flex justify-between font-medium mb-4">
        Created Deals
      </div>
      <AppTable columns={columns} data={deals}>
        <EmptyStateCard message="Oops! You do not have any deals yet" buttonText="Create new Deal" onAddClick={onCreateDeal} />
      </AppTable>
    </Card>
  );
};
