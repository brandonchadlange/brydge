import Card from "@/components/card";
import PayoutModal, { usePayoutModal } from "@/components/payout-modal";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BalanceCard = () => {
  return (
    <div className="bg-wallet-card h-[180px] bg-contain bg-center bg-no-repeat p-5 text-white text-sm">
      <div className="flex flex-col h-full justify-between">
        <p>My Wallet</p>
        <div>
          <p className="text-lg font-semibold">₦ 1,250,000.00</p>
          <p className="text-xs">Total Balance</p>
        </div>
        <div className="flex">
          <div>
            <p className="text-xs">Currency</p>
            <p>NGN / Nigerian Naira</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountDetail = ({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) => {
  return (
    <>
      <h3 className={"text-sm font-semibold mt-6 " + inter.className}>
        {heading}
      </h3>
      <p className={"text-xs text-gray-400 font-medium" + inter.className}>
        {text}
      </p>
    </>
  );
};

const Dashboard = (props: any) => {
  const payoutModal = usePayoutModal();

  return (
    <>
      <main className="container p-8">
        <div className="flex gap-8">
          <div className="w-[360px]">
            <Card>
              <BalanceCard />
              <AccountDetail
                heading="Account Details"
                text="You can fund your NGN wallet using these details"
              />
              <AccountDetail heading="7645367890" text="Account Number" />
              <AccountDetail
                heading="Ronnie Peter Parker"
                text="Account Name"
              />
              <AccountDetail heading="WEMA Bank" text="Bank Name" />
              <button
                className="bg-black text-white w-full py-3 font-medium rounded-lg mt-12"
                onClick={payoutModal.show}
              >
                Make Payment
              </button>
            </Card>
          </div>
          <div className="flex-1">
            <Card>
              <h2>Transactions</h2>
            </Card>
          </div>
        </div>
      </main>
      <PayoutModal controller={payoutModal} />
    </>
  );
};

export default Dashboard;
