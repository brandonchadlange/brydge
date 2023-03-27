import React from "react";
import LeftPanel from "./LeftPanel";

const withAuthenticationLayout = (WrappedComponent: React.ElementType) => {
  const WithAuthenticationLayout = () => {
    return (
      <section className="w-full inline-block md:flex md:flex-row md:justify-between">
        <LeftPanel />
        <div className="bg-white w-full font-secondary">
          <WrappedComponent />
        </div>
      </section>
    );
  };

  return WithAuthenticationLayout;
};

export default withAuthenticationLayout;
