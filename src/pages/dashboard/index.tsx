import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import * as Yup from "yup";

import Slideout from "@/components/slide-out";
import syndicateService from "@/frontend/services/syndicate";
import { UserContext } from "@/context";
import userService from "@/frontend/services/user";
import DealForm from "../deals/deal-creation-form";
import WelcomeCard from "@/components/WelcomeCard";
import ViewDealsCard from "@/components/ViewDealsCard";
import CreatedDealsCard from "@/Organisms/CreatedDealsTable";
import WalletCard from "@/Organisms/WalletCard";
import DashboardLayout from "@/components/withDashboardLayout";
import Modal from "@/components/modal";
import Input from "@/components/input";
import { Form, Formik } from "formik";
import FormField from "@/components/input/FormField";
import Button from "@/components/Button";

const Dashboard = () => {
  const [showDealCreation, setShowDealCreation] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const toggleSlideOut = () => {
    setShowDealCreation(!showDealCreation);
  };

  const [show, setShow] = useState(true);

  return (
    <DashboardLayout>
      <div className={`container p-8 pt-24`}>
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
          <div>
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
