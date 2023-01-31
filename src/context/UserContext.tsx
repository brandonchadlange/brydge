import React, { createContext, ReactNode, useMemo, useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  isSyndicateUser: boolean;
}

interface UserContextType {
  user: User;
  setUser?: (user: User) => void;
  resetUser?: () => void;
}

const initialState = (): UserContextType => ({
  user: {
    firstName: '',
    lastName: '',
    isSyndicateUser: false
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
