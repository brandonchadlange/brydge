import React from 'react';
import dayjs from 'dayjs';
import { HiArrowDownLeft, HiArrowUpRight } from 'react-icons/hi2';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import { Transaction } from './RecentActivities';

interface TransactionActivityProps {
  transaction: Transaction;
}

export default function TransactionActivity({ transaction }: TransactionActivityProps) {
  const isDeposit = transaction.type === "Deposit";

  return (
   <div className="flex justify-between items-center mx-4 my-6">
     <div className="flex">
      <div className={`h-10 w-10 flex items-center justify-center rounded-full ${isDeposit ? 'bg-lime-400' : 'bg-red-400'}`}>
        {
          isDeposit ? <HiArrowDownLeft /> : <HiArrowUpRight />
        }
      </div>
      <div className="ml-4">
        <div className="text-sm">
          {transaction.name}
        </div>
        <div className="text-xs text-gray-400">
          {dayjs(transaction.date).fromNow()}
        </div>
      </div>
    </div>
    <div className="text-sm">
      {transaction.currency} {transaction.amount}
    </div>
   </div>
  )
}
