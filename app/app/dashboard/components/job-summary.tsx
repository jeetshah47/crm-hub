import Card from "@/app/components/common/Container/Cards/Card";
import Image from "next/image";
import React from "react";

const JobSummary = () => {
  return (
    <div className="space-y-4 overflow-auto h-[460px] 2xl:h-auto ">
      <Card padding="p-5">
        <div className="flex gap-4">
          <div>
            <Image src={'/Image.svg'} width={48} height={48} alt="" />
          </div>
          <div>
            <p className="text-secondary text-xs">PN00001265</p>
            <p className="font-bold text-lg">Job name - 1</p>
          </div>
        </div>
        <div className="pt-4 flex flex-1 items-center justify-between">
          <p className="text-secondary">Created Sep 12,2023</p>
          <div className="text-yellow-500 bg-yellow-100 rounded-2xl py-2 px-4">
            <p>Medium</p>
          </div>
          </div>
      </Card>
      <Card padding="p-5">
        <div className="flex gap-4">
          <div>
            <Image src={'/Image.svg'} width={48} height={48} alt="" />
          </div>
          <div>
            <p className="text-secondary text-xs">PN00001265</p>
            <p className="font-bold text-lg">Job name - 1</p>
          </div>
        </div>
        <div className="pt-4 flex flex-1 items-center justify-between">
          <p className="text-secondary">Created Sep 12,2023</p>
          <div className="text-yellow-500 bg-yellow-100 rounded-2xl py-2 px-4">
            <p>Medium</p>
          </div>
          </div>
      </Card>
      <Card padding="p-5">
        <div className="flex gap-4">
          <div>
            <Image src={'/Image.svg'} width={48} height={48} alt="" />
          </div>
          <div>
            <p className="text-secondary text-xs">PN00001265</p>
            <p className="font-bold text-lg">Job name - 1</p>
          </div>
        </div>
        <div className="pt-4 flex flex-1 items-center justify-between">
          <p className="text-secondary">Created Sep 12,2023</p>
          <div className="text-yellow-500 bg-yellow-100 rounded-2xl py-2 px-4">
            <p>Medium</p>
          </div>
          </div>
      </Card>
      
     
    </div>
  );
};

export default JobSummary;
