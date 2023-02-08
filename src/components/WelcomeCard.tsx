import React, { useContext } from 'react';
import { HiInformationCircle, HiXCircle } from 'react-icons/hi2';

import { UserContext } from '@/context';
import Card from './card';

interface WelcomeCardProps {
  className?: string;
}

const WelcomeCard = ({ className }: WelcomeCardProps) => {
  const { user } = useContext(UserContext);

  return (
    <Card className={`text-white ${className}`}>
      <h3 className="font-semibold mb-2">
        Hello, {user.name} 😁
      </h3>
      <div className="text-sm mb-12">
        Such  a wonderful day won't you say ?
      </div>
      <div className="flex">
        <div className="flex w-1/3">
          <div className="bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center">
            <HiInformationCircle className="w-6 h-6" />
          </div>
          <div className="ml-2">
            <div>0</div>
            <div className="text-gray-400 text-xs">
              Pending Deals
            </div>
          </div>
        </div>
        <div className="flex w-1/3">
          <div className="bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center">
            <HiXCircle className="w-6 h-6"/>
          </div>
          <div className="ml-2">
            <div>0</div>
            <div className="text-gray-400 text-xs">
              Denied Deals
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard;
