import React from 'react';
import { BsStack } from 'react-icons/bs';

import MyWalletCard from '@/Molecules/MyWalletCard';
import RecentActivities from '@/Molecules/RecentActivities';
import Card from '../components/card';

interface WalletCardProps {
  className?: string;
}

const WalletCard = ({ className }: WalletCardProps) => {
  return (
    <Card className={`flex flex-col p-4 ${className}`}>
      <MyWalletCard className="mb-6"/>
      <RecentActivities className="h-full overflow-y-scroll max-h-[360px]" onFinanceDeal={() => {}}/>
    </Card>
  );
};

export default WalletCard;
