import React from 'react';
import Image from 'next/image';

import Button from '@/components/Button';
import TransactionActivity from './TransactionActivity';

export interface Transaction {
  id: string;
  type: 'Deposit' | 'Withdraw';
  name: string;
  date: number | Date;
  amount: number;
  currency: string;
}

interface RecentActivitiesProps {
  className?: string;
  onFinanceDeal: () => void;
}

export default function RecentActivities({ className, onFinanceDeal }: RecentActivitiesProps) {
  const transactions: Transaction[] = [
    {
      id: "1",
      type: 'Deposit',
      name: 'Cash Deposit',
      date: Date.now(),
      amount: 50000,
      currency: '$'
    },
    {
      id: "2",
      type: "Withdraw",
      name: 'Cash out',
      date: Date.now(),
      amount: 2000,
      currency: '€'
    },
    {
      id: "3",
      type: "Deposit",
      name: 'Peter Graham',
      date: Date.now(),
      amount: 1000,
      currency: '$'
    }
  ];
  return (
    <div className={className}>
      <div className="flex justify-between font-semibold mb-2 sticky top-0 bg-white">
        Recent Activities
      </div>
      {
        transactions.map(transaction => <TransactionActivity key={transaction.id} transaction={transaction}/>)
      }
      {
        !transactions.length && (
          <div className="flex flex-col h-full justify-center items-center text-center">
            <Image src="ufo.svg" alt="ufo" height={115} width={115}/>
            <div className="text-gray-500">Oops! You do not have any transactions yet</div>
            <Button type="button" className="underline !bg-white text-black" onClick={onFinanceDeal}>Create new Deal</Button>
          </div>
        )
      }
      
    </div>
  );
};

