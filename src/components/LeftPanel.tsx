import Image from "next/image";
import Link from "next/link";

import Avatars from "@/assets/images/layout/auth/avatars.png";

const LeftPanel = () => {
  return (
    <div className="hidden md:block max-w-4xl text-white">
      <div className="relative flex flex-col justify-center h-screen bg-dark-auth bg-auth-panel-pattern md:col-span-1 p-7">
        <Link href="/" className="absolute text-2xl font-bold top-6">
          Brydge.
          {/* <Image src={LogoWhite} alt="logo-white" /> */}
        </Link>
        <div className="flex flex-col">
          <h2 className="mb-8 text-5xl font-semibold font-secondary">
            Simplifying Global Execution and <br />
            Financing of Trade.
          </h2>
          <p className="font-semibold text-lg">
            Over 1000+ investors and counting
          </p>
          <Image
            src={Avatars}
            alt="avatar faces"
            className="my-8 rounded-full"
            width={150}
            height={50}
          />
          <Link href="/" className="underline opacity-80">
            Join our community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
