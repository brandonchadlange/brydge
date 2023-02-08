import React from 'react';
import Input from './input';
import Progress from './progress';

export default function Details(){
  return (
    <>
    <div className="bg-white rounded-md mt-12 shadow-sm">
    <div className="flex justify-between p-4">
      <div className="flex gap-2">
        <div className="h-12 w-12 bg-gray-700 rounded-md"></div>
        <div>
          <h1 className="text-lg font-bold font-primary">The Pryde Lab</h1>
          <p className="text-xs">Importation of fibre from eastern europe</p>
        </div>
      </div>
      <div className="flex gap-10 align-bottom">
        <div className="w-40">
          <Progress value={70} />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-primary">$ 12,000.00</h1>
          <p className="text-xs">Amount Raised</p>
        </div>
      </div>
    </div>
    <hr className="text-gray-500 my-2 h-1" />
    <div className="flex justify-between p-4">
      <div className="flex gap-10">
        <div>
          <h3>30%</h3>
          <p className="text-xs">Lead Allocation</p>
        </div>
        <div>
          <h3>March 20, 2023</h3>
          <p className="text-xs">Closing Date</p>
        </div>
        <div>
          <h3>4</h3>
          <p className="text-xs">Co Investors</p>
        </div>
        <div>
          <h3>Raising</h3>
          <p className="text-xs">Status</p>
        </div>
      </div>
      <button className="rounded-md bg-red-200 text-red-400 px-6 text-sm">Deactivate</button>
    </div>
    </div>
    <div className="mt-12">
      <Input.Date />
    </div>
    <button>Show slideout</button>
  </>
  )
}