import React from "react";
import Image from "next/image";
import Link from "next/link";

const LeftPanel = () => {
  return (
    <div className="hidden md:block max-w-4xl">
      <div className="relative flex flex-col justify-center h-screen left-panel md:col-span-1 p-7">
        <Link href="/" className="absolute text-2xl font-bold top-6">
          Brydge.
        </Link>
        <div className="flex flex-col px-16">
          <h2 className="mb-8 text-3xl font-bold">
            We are facilitating deals from different industries, handling diligence and sourcing.
          </h2>
          <p className="opacity-80">Over 1000+ investors and counting</p>
          <Image
            src="/avatar-group.png"
            alt="avatar faces"
            className="my-8 mix-blend-multiply"
            width={150}
            height={50}
          />
          <Link href="/" className="underline opacity-80">
            Join our community
          </Link>
        </div>
        <div className="earth rounded-full absolute right-4 bottom-4">
          <Image
            src="/earth.svg"
            alt="earth"
            className="mix-blend-multiply"
            width={440}
            height={450}
          />
        </div>
      </div>

      {/* styles */}
      <style jsx>{`
        .left-panel {
          background: linear-gradient(180deg, #B4FF14 0%, rgba(255, 230, 97, 0.69) 100%);
        }

        .earth {
          background: linear-gradient(0deg, rgba(217, 217, 217, 0), rgba(217, 217, 217, 0)), linear-gradient(70.75deg, #FFFFFF 6.73%, rgba(255, 255, 255, 0) 80.85%);
        }
      `}</style>
    </div>
  );
};

export default LeftPanel;
