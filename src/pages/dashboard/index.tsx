import { useState } from "react";

import EntityRepository from "@/backend/repositories/entity";
import UserRepository from "@/backend/repositories/user";
import { EntityType } from "@/common/enums";
import { MerchantState } from "@/common/types/merchant";
import Slideout from "@/components/slide-out";
import ViewDealsCard from "@/components/ViewDealsCard";
import WelcomeCard from "@/components/WelcomeCard";
import DashboardLayout from "@/components/withDashboardLayout";
import CreatedDealsCard from "@/Organisms/CreatedDealsTable";
import WalletCard from "@/Organisms/WalletCard";
import axios from "axios";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { useQuery } from "react-query";
import { authOptions } from "../api/auth/[...nextauth]";
import DealForm from "../deals/deal-creation-form";

// const getMerchantState = () => {
//   return axios.get<MerchantState>("http://localhost:3000/api/merchant/state");
// };

const MerchantDashboard = () => {
  // const merchantStateQuery = useQuery(["merchant-state"], getMerchantState, {
  //   retry: false,
  // });

  // console.log(merchantStateQuery);

  return <>Merchant dashboard!!!</>;
};

const Dashboard = (props: any) => {
  const [showDealCreation, setShowDealCreation] = useState(false);

  const toggleSlideOut = () => {
    setShowDealCreation(!showDealCreation);
  };

  // if (props.entity.type === EntityType.merchant) {
  //   return (
  //     <DashboardLayout>
  //       <MerchantDashboard />
  //     </DashboardLayout>
  //   );
  // }

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

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = (await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )) as any;
  const user = await UserRepository.getUserById(session.uid);
  const entity = await EntityRepository.getEntityById(user!.map().entityId!);

  return {
    props: {
      entity,
    },
  };
};
