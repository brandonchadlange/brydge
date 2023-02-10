import React from 'react';
import { BsSearch } from 'react-icons/bs';

import Button from './Button';

interface EmptyStateCardProps {
  message: string;
  buttonText: string;
  onAddClick: () => void;
}

export default function EmptyStateCard({ buttonText, message, onAddClick }: EmptyStateCardProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <BsSearch />
      <div>{message}</div>
      <Button type="button" className="underline !bg-white text-black" onClick={onAddClick}>{buttonText}</Button>
    </div>
  )
}