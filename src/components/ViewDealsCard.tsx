import React from 'react';
import { BsStack } from 'react-icons/bs';

import Card from './card';

interface ViewDealsCardProps {
  className?: string;
}

const ViewDealsCard = ({ className }: ViewDealsCardProps) => {
  const dealsCount = 0;

  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex justify-between font-semibold mb-2">
        Deals
        <BsStack />
      </div>
      <div className="font-semibold text-3xl my-6">
        {dealsCount}
      </div>
      <div>
        <span className="underline cursor-pointer">View Details</span>
      </div>
    </Card>
  );
};

export default ViewDealsCard;
