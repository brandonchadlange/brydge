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
import { SyndicateForm } from '@/components/Form';
import DealForm from '../deals/deal-creation-form'
import WelcomeCard from '@/components/WelcomeCard';
import ViewDealsCard from '@/components/ViewDealsCard';
import CreatedDealsCard from '@/components/CreatedDealsTable';

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
        <div className="flex h-48 mb-6 w-2/3 justify-between gap-8">
          <WelcomeCard className="!bg-dark-500 w-2/3"/>
          <ViewDealsCard className="w-1/3"/>
        </div>
        <CreatedDealsCard className="w-2/3" />
        <div className="bg-white rounded-md mt-12 shadow-sm">
          <div className="flex justify-between p-4">
            <div className="flex gap-2">
              <div className="h-12 w-12 bg-gray-700 rounded-md"></div>
              <div>
                <h1 className="text-lg font-bold font-primary">The Pryde Lab</h1>
                <p className="text-xs">Importation of fibre from eastern europe</p>
              </div>
            </div>
            <div className="flex gap-10 align-bottom">
              <div className="w-40">
                <Progress value={70} />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-primary">$ 12,000.00</h1>
                <p className="text-xs">Amount Raised</p>
              </div>
            </div>
          </div>
          <hr className="text-gray-500 my-2 h-1" />
          <div className="flex justify-between p-4">
            <div className="flex gap-10">
              <div>
                <h3>30%</h3>
                <p className="text-xs">Lead Allocation</p>
              </div>
              <div>
                <h3>March 20, 2023</h3>
                <p className="text-xs">Closing Date</p>
              </div>
              <div>
                <h3>4</h3>
                <p className="text-xs">Co Investors</p>
              </div>
              <div>
                <h3>Raising</h3>
                <p className="text-xs">Status</p>
              </div>
            </div>
            <button className="rounded-md bg-red-200 text-red-400 px-6 text-sm">Deactivate</button>
          </div>
        </div>
        <div className="mt-12">
          <Card>
            <TableTest />
          </Card>
        </div>
        <div className="mt-12">
          <Input.Date />
        </div>
        <button onClick={toggleSlideOut}>Show slideout</button>
        <Slideout show={showDealCreation} setShow={toggleSlideOut}>
          {
            Math.random() - 0.5 > 0 ? (
              <div className="p-4">
                <h1 className="text-lg font-bold font-primary mb-4">Create Deal</h1>
                <DealForm />
              </div>
            ) : <SyndicateForm toggleSlideOut={toggleSlideOut}/>
          }
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
