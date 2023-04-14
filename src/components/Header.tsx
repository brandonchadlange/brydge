import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="font-primary flex w-full h-[80px] px-6 justify-between items-center border-b border-slate-200">
      <Image
        src="/logo-black.png"
        alt="Brydge Logo"
        className="borde"
        width={100}
        height={80}
      />
      {router.pathname !== "/onboarding" && (
        <button
          type="button"
          className=""
          onClick={() => router.push("/onboarding")}
        >
          Go Back
        </button>
      )}
    </header>
  );
};
