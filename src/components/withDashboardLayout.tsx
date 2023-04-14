import React, { ReactNode, useEffect } from "react";
import Menu from "./Menu";
import { useSession, signOut } from "next-auth/react";

const DashboardLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { status } = useSession();

  useEffect(() => {
    if (status == "unauthenticated") {
      signOut({
        redirect: true,
        callbackUrl: "/login",
      });
    }
  }, [status]);

  return (
    <section className="flex">
      <Menu />
      <div className="h-full font-primary flex-1">
        {children}
        {/* <WrappedComponent /> */}
      </div>
    </section>
  );
};

// const withDashboardLayout = (WrappedComponent: React.ElementType) => {
//   const WithDashboardLayout = () => {
//     return (
//       <section className='grid md:grid-cols-4'>
//         <Menu />
//         <div className='h-screen font-primary bg-[#F9F9F9] md:col-span-3'>
//           <WrappedComponent />
//         </div>
//       </section>
//     )
//   }
//   return WithDashboardLayout
// }

export default DashboardLayout;
