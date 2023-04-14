import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBell, BsSearch } from "react-icons/bs";

interface HeaderNavMenuProps {
  className?: string;
}

export default function HeaderNavMenu({ className }: HeaderNavMenuProps) {
  return (
    <div className={`flex items-center justify-between w-32 absolute right-8 top-4 ${className}`}>
      <BsSearch className="h-6 w-6 text-gray-500" />
      <BsBell className="h-6 w-6  text-gray-500" />
      <Link href="/account">
        <Image
          className="rounded-full cursor-pointer"
          src="https://picsum.photos/200"
          alt="account"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
}
