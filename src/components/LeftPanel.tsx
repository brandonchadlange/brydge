import Image from "next/image";
import Link from "next/link";
import BrydgeLogo from "@/assets/images/layout/auth/brydge_white.svg";

const LeftPanel = () => {
  return (
    <div className="hidden md:block max-w-4xl text-white relative">
      <Link href="/" className="absolute  top-8 left-1">
          <Image src={BrydgeLogo} alt="logo-white" />
        </Link>
      <div className=" flex flex-col justify-center h-screen bg-dark-auth bg-auth-panel-pattern  p-20">
        
        <div className="text-5xl font-semibold font-primary">
          <h2 className="mb-8">
            We are building an Operating System for <br />
             Merchants and Funders.
          </h2>
          <h2>Get access to features like currency conversion, <br /> invoices & document management.</h2> <br />
          <h2>Raise funds from peers and friends all in one place.</h2>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
