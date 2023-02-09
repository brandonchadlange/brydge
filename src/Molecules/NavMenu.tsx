import React, { useContext } from 'react';
import Image from 'next/image';
import { BsBell, BsSearch } from 'react-icons/bs';
import { UserContext } from '@/context';

interface HeaderNavMenuProps {
  className?: string;
}

export default function HeaderNavMenu({ className }: HeaderNavMenuProps) {
  const { user } = useContext(UserContext);
  if (!user.name) return null;

  return (
    <div className={`flex items-center justify-between w-32 absolute right-8 top-8 ${className}`}>
      <BsSearch className="h-6 w-6 text-gray-500" />
      <BsBell className="h-6 w-6  text-gray-500"/>
      <Image className="rounded-full" src="https://picsum.photos/200" alt="profile" width={32} height={32}/>
    </div>
  );
};
