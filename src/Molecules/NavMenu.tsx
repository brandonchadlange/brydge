import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { BsBell, BsSearch } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";

interface HeaderNavMenuProps {
  className?: string;
}

export default function HeaderNavMenu({ className }: HeaderNavMenuProps) {
  return (
    <div
      className={`flex items-center justify-between w-32 absolute right-8 top-8 ${className}`}
    >
      <BsSearch className="h-6 w-6 text-gray-500" />
      <BsBell className="h-6 w-6  text-gray-500" />
      <Link href="/profile">
        <Image
          className="rounded-full cursor-pointer"
          src="https://picsum.photos/200"
          alt="profile"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
}
