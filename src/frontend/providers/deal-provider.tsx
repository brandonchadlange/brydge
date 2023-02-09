import { Deal } from "@prisma/client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type DealContext = {
  deals: Deal[];
};

const initialState = (): DealContext => ({
  deals: [],
});

export const DealStateContext = createContext<DealContext>(initialState());

export type DealContextProviderProps = { children: ReactNode };

export const DealContextProvider = ({ children }: DealContextProviderProps) => {
  const [deals, setDeals] = useState<Deal[]>([]);

  setTimeout(() => {
    setDeals([
      {
        id: "1234",
        accountName: "1234",
        accountId: "1234",
        accountNumber: "1234",
        bankName: "Nedbank",
        businessId: "1234",
        expectedReturn: 100,
        expectedTenure: 1234,
        fundAmount: 132,
        name: "My deal",
      },
    ]);
  }, 3000);

  return (
    <DealStateContext.Provider value={{ deals }}>
      {children}
    </DealStateContext.Provider>
  );
};

export const useDealState = () => useContext(DealStateContext);
