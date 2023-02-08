import { useContext, useEffect, useState } from 'react';
import Image from 'next/image'

import Card from '@/components/card';
import Input from '@/components/input';
import Progress from '@/components/progress';
import Slideout from '@/components/slide-out';
import AppTable, { AppTableColumn } from '@/components/table';
import withDashboardLayout from '@/components/withDashboardLayout';
import syndicateService from '@/frontend/services/syndicate';
import { UserContext } from '@/context';
import showToast from '@/frontend/utility/show-toast';
import userService from '@/frontend/services/user';
import DealForm from '../deals/deal-creation-form'
import WelcomeCard from '@/components/WelcomeCard';
import ViewDealsCard from '@/components/ViewDealsCard';
import CreatedDealsCard from '@/components/CreatedDealsTable';
import WalletCard from '@/Organisms/WalletCard';

const Dashboard = () => {
  const [showDealCreation, setShowDealCreation] = useState(false);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const getSyndicates = async () => {
     const syndicates = await syndicateService.getSyndicates();
     console.log({ syndicates });
    }

    const getUserState = async () => {
      const userState  = await userService.getUserState();
      setUser!({ ...user, ...userState});

      const message = userState.isSyndicate ? 'Hello syndicate user 😉' : `Hello ${userState.name} 😉`;
      showToast(message);
    }

    getSyndicates();
    getUserState();
  }, []);

  const toggleSlideOut = () => {
    setShowDealCreation(!showDealCreation);
  };

  return (
    <>
      <div className="container p-8">
        <div className="flex justify-between gap-8">
          <div className="w-10/12">
            <div className="flex h-48 mb-6 justify-between gap-8">
              <WelcomeCard className="!bg-dark-500 w-2/3"/>
              <ViewDealsCard className="w-1/3"/>
            </div>
            <CreatedDealsCard onCreateDeal={toggleSlideOut}/>
          </div>
          <WalletCard className="w-4/12"/>
        </div>

        <Slideout show={showDealCreation} setShow={toggleSlideOut}>
          <div className="p-4">
            <h1 className="text-lg font-bold font-primary mb-4">Create Deal</h1>
            <DealForm />
          </div>
        </Slideout>
      </div>
    </>
  );
};

type Member = {
  id: string;
  lp: string;
  deal: string;
  carryPercent: string;
  status: string;
};

const TableTest = () => {
  const columns: AppTableColumn<Member>[] = [
    {
      name: 'lp',
      heading: 'LP',
      component(data) {
        return <p className="font-bold">{data.lp}</p>;
      },
    },
    {
      name: 'deal',
      heading: 'Deal',
      component(e) {
        return <>{e.deal}</>;
      },
    },
    {
      name: 'carryPercent',
      heading: 'Carry %',
      component(e) {
        return <>{e.carryPercent}</>;
      },
    },
    {
      name: 'status',
      heading: 'Status',
      component(e) {
        return <>{e.status}</>;
      },
    },
  ];

  const data: Member[] = [
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

  return <AppTable columns={columns} data={data}></AppTable>;
};

export default withDashboardLayout(Dashboard);
