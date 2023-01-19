import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>Brydge</h1>
      {children}
    </>
  );
};

export default AppLayout;
