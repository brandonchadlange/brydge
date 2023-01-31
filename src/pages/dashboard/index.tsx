import { useContext, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import Image from 'next/image'

import Card from '@/components/card';
import Input from '@/components/input';
import Layout from '@/components/layout';
import Progress from '@/components/progress';
import Slideout from '@/components/slide-out';
import AppTable, { AppTableColumn } from '@/components/table';
import withDashboardLayout from '@/components/withDashboardLayout';
import syndicateService from '@/frontend/services/syndicate';
import { UserContext } from '@/context';
import showToast from '@/frontend/utility/show-toast';
import userService from '@/frontend/services/user';
import { SyndicateForm } from '@/components/Form';

const Dashboard = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [file, setFile] = useState<File>();
  const [uploadedImageUrl, setUploadedImageUrl] = useState();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const getSyndicates = async () => {
     const syndicates = await syndicateService.getSyndicates();
     console.log({ syndicates });
    }

    const getUserState = async () => {
      const userState  = await userService.getUserState();
      setUser!({ ...user, ...userState});

      const message = userState.isSyndicate ? 'Hello syndicate user 😉' : `Hello ${userState.username} 😉`;
      showToast(message);
    }

    getSyndicates();
    getUserState();
  }, []);

  const showSlideOut = () => {
    setShowOverlay(true);
  };

  return (
    <>
      <div className="container p-8">
        <Card>
          <h1 className="text-lg font-bold font-primary">Company Details</h1>
          <Layout.Grid columns={2}>
            <SyndicateForm />
          </Layout.Grid>
        </Card>
        <div className="p-4">
          <input type="file" />
          <button className="rounded-md bg-black text-white px-6 text-sm">Upload File</button>
          {uploadedImageUrl && <Image src={uploadedImageUrl} alt="uploaded-image" width={200} height={200} />}
        </div>
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
        <button onClick={() => showSlideOut()}>Show slideout</button>
        <Slideout show={showOverlay} setShow={setShowOverlay}>
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
