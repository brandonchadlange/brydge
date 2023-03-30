import DashboardLayout from "@/components/withDashboardLayout";
import queries from "@/frontend/utility/queries";
import Image from "next/image";
import { useQuery } from "react-query";

const MyWallet = () => {
  const { getWalletBallances, getWalletTransactions } = queries;

  const balancesQuery = useQuery("balances", getWalletBallances, {
    initialData: [],
  });

  const transactionsQuery = useQuery("transactions", getWalletTransactions, {
    initialData: [],
  });

  const balances = balancesQuery.data!;
  const transactions = transactionsQuery.data!;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));
  };

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(value / 100);
  };

  return (
    <main className="p-4 mt-20">
      <div className="grid grid-cols-4 gap-4">
        {balances.map((balance) => (
          <div className="p-4 shadow-sm bg-white rounded-md" key={balance.id}>
            <div className="flex justify-between align-top">
              <div>
                <p className="text-sm">Available balance</p>
                {balance.currency} {balance.valueInCents / 100}
              </div>
              <Image
                src="https://app.fincra.com/images/currency-icons/ngn.svg"
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>
        ))}
        <div className="col-span-3 p-4 bg-white rounded-md shadow-sm">
          <h1 className="text-lg font-primary">Transactions</h1>
          {transactions.map((transaction) => (
            <div
              className="my-6 flex justify-between align-top"
              key={transaction.id}
            >
              <div>
                <p className="font-semibold">{transaction.description}</p>
                <p className="text-sm font-secondary text-slate-500">
                  {formatDate(transaction.date)}
                </p>
              </div>
              <p className="text-sm font-semibold text-green-500">
                + {formatMoney(transaction.value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyWallet;
