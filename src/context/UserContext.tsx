import React, { createContext, ReactNode, useMemo, useState } from 'react';
import { IGetUserResponse } from '@/backend/route-handlers/user/user.types';

interface UserContextType {
  user: IGetUserResponse;
  setUser?: (user: IGetUserResponse) => void;
  resetUser?: () => void;
}

const initialState = (): UserContextType => ({
  user: {
    name: '',
    isBusiness: false,
    isOnboarded: false,
    isSyndicate: true,
    syndicates: [],
    businesses: []
  }
});

export const UserContext = createContext<UserContextType>(initialState());

export  type UserContextProviderProps = { children: ReactNode };

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const state = initialState();
  const [user, setUser] = useState(state.user);

  const resetUser = () => {
    setUser(initialState().user);
  }

  const value = useMemo(() => ({
    user,
    setUser,
    resetUser
  }), [user]);

  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
