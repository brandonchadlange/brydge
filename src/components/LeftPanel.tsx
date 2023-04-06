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
        
        <div className="flex flex-col">
          <h2 className="mb-8 text-5xl font-semibold font-primary">
            Simplifying Global Execution and <br />
            Financing of Trade.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
