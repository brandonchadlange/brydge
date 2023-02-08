import React from 'react';
import Card from '../components/card';

interface MyWalletCardProps {
  className?: string;
}

export default function MyWalletCard({ className }: MyWalletCardProps) {
  const balance = 0;

  return (
    <Card className={`p-4 text-white bg-blue-400 rounded-2xl ${className}`}>
      <div className="flex justify-between font-semibold mb-2">
        My Wallet
      </div>
      <div className="my-6">
        <div className="font-semibold text-3xl ">
          $ {balance}
        </div>
        <div className="text-xs">Total Balance</div>
      </div>
      <div>
        <span className="underline cursor-pointer">Fund Wallet</span>
      </div>
    </Card>
  );
};

