import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import Slideout from "@/components/slide-out";
import AppTable, { AppTableColumn } from "@/components/table";
import withDashboardLayout from "@/components/withDashboardLayout";
import syndicateService from "@/frontend/services/syndicate";
import { UserContext } from "@/context";
import userService from "@/frontend/services/user";
import DealForm from "../deals/deal-creation-form";
import WelcomeCard from "@/components/WelcomeCard";
import ViewDealsCard from "@/components/ViewDealsCard";
import CreatedDealsCard from "@/Organisms/CreatedDealsTable";
import WalletCard from "@/Organisms/WalletCard";
import { HiXMark } from "react-icons/hi2";
import DashboardLayout from "@/components/withDashboardLayout";

const Dashboard = () => {
  const [showDealCreation, setShowDealCreation] = useState(false);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const getSyndicates = async () => {
      const syndicates = await syndicateService.getSyndicates();
      console.log({ syndicates });
    };

    const getUserState = async () => {
      const userState = await userService.getUserState();
      setUser!({ ...user, ...userState });
      if (!userState.isOnboarded) {
        toast(
          (t) => (
            <div className="flex justify-between items-center bg-blue-200 rounded font-medium w-ful w-[700px] p-4 left-[-418px] absolute ">
              <span>
                Hey there {user.name} Welcome 🎉. Complete your{" "}
                <span className="text-blue-500">verification</span> to do more
                with brydge
              </span>
              <HiXMark
                className="h-6 w-6"
                onClick={() => {
                  toast.dismiss(t.id);
                }}
              />
            </div>
          ),
          {
            className: "!bg-blue-200 !w-0 !p-0 m-0 none",
            duration: Infinity,
          }
        );
      }
    };

    getSyndicates();
    getUserState();
  }, []);

  const toggleSlideOut = () => {
    setShowDealCreation(!showDealCreation);
  };

  return (
    <DashboardLayout>
      <div className={`container p-8 pt-32`}>
        <div className="flex justify-between gap-8">
          <div className="w-10/12">
            <div className="flex h-48 mb-6 justify-between gap-8">
              <WelcomeCard className="!bg-dark-500 w-2/3" />
              <ViewDealsCard className="w-1/3" />
            </div>
            <CreatedDealsCard onCreateDeal={toggleSlideOut} />
          </div>
          <WalletCard className="w-4/12" />
        </div>

        <Slideout show={showDealCreation} setShow={toggleSlideOut}>
          <div className="p-4">
            <h1 className="text-lg font-bold font-primary mb-4">Create Deal</h1>
            <DealForm />
          </div>
        </Slideout>
      </div>
    </DashboardLayout>
  );
};

// type Member = {
//   id: string;
//   lp: string;
//   deal: string;
//   carryPercent: string;
//   status: string;
// };

// const TableTest = () => {
//   const columns: AppTableColumn<Member>[] = [
//     {
//       name: "lp",
//       heading: "LP",
//       component(data) {
//         return <p className="font-bold">{data.lp}</p>;
//       },
//     },
//     {
//       name: "deal",
//       heading: "Deal",
//       component(e) {
//         return <>{e.deal}</>;
//       },
//     },
//     {
//       name: "carryPercent",
//       heading: "Carry %",
//       component(e) {
//         return <>{e.carryPercent}</>;
//       },
//     },
//     {
//       name: "status",
//       heading: "Status",
//       component(e) {
//         return <>{e.status}</>;
//       },
//     },
//   ];

//   const data: Member[] = [
//     {
//       id: "1",
//       lp: "Peter Graham",
//       deal: "Fibre Importation",
//       carryPercent: "10%",
//       status: "Pending",
//     },
//     {
//       id: "1",
//       lp: "Gracie Montez",
//       deal: "Fibre Importation",
//       carryPercent: "10%",
//       status: "Pending",
//     },
//   ];

//   return <AppTable columns={columns} data={data}></AppTable>;
// };

export default Dashboard;
