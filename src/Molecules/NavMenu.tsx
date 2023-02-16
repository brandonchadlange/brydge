import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import toast from "react-hot-toast";
import { BsBell, BsSearch } from 'react-icons/bs';
import { HiXMark } from 'react-icons/hi2';

import { UserContext } from '@/context';

interface HeaderNavMenuProps {
  className?: string;
}

export default function HeaderNavMenu({ className }: HeaderNavMenuProps) {
  const { user } = useContext(UserContext);
  const [toastId, setToastId] = useState<string>();

  useEffect(() => {
      if (user.name && !user?.isOnboarded && !toastId) {
        const toast_id = toast(
          (t) => (
            <div className="flex justify-between items-center bg-blue-200 rounded font-medium w-ful w-[700px] p-4 left-[-418px] absolute ">
              <span>
                Hey there {user.name} Welcome 🎉. Complete your{" "}
                <span className="text-blue-500">verification</span> to do more
                with brydge
              </span>
              <HiXMark
                className="h-6 w-6"
                onClick={() => {
                  toast.dismiss(t.id);
                  setToastId(undefined);
                }}
              />
            </div>
          ),
          {
            className: "!bg-blue-200 !w-0 !p-0 m-0 none",
            duration: Infinity,
          }
        );

        setToastId(toast_id)
      }
  }, [user]);

  if (!user.name) return null;

  return (
    <div className={`flex items-center justify-between w-32 absolute right-8 top-8 ${className}`}>
      <BsSearch className="h-6 w-6 text-gray-500" />
      <BsBell className="h-6 w-6  text-gray-500"/>
      <Link href="/profile">
        <Image className="rounded-full cursor-pointer" src="https://picsum.photos/200" alt="profile" width={32} height={32}/>
      </Link>
    </div>
  );
};
