"use client";
import Card from "@/app/components/common/Container/Cards/Card";
import React from "react";
import { Icon } from "@iconify/react";

const PaymentRemainder = () => {
  return (
    <div>
      <Card>
        <div className="flex flex-1 gap-2">
          <div className="w-1  rounded-sm bg-red-500" />
          <div className="w-full">
            <div>
              <div className="py-2">
                <p className="font-bold">XYZ Payment</p>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-secondary">Today | 5:00 PM</p>
              <div className="bg-low-blue p-1.5 flex gap-1 items-center text-secondary">
                <Icon icon="majesticons:clock" fontSize={24} />
                <p>4h</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-1 gap-2">
          <div className="w-1  rounded-sm bg-green-500" />
          <div className="w-full">
            <div>
              <div className="py-2">
                <p className="font-bold">XYZ Payment</p>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-secondary">Today | 5:00 PM</p>
              <div className="bg-low-blue p-1.5 flex gap-1 items-center text-secondary">
                <Icon icon="majesticons:clock" fontSize={24} />
                <p>4h</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-1 gap-2">
          <div className="w-1  rounded-sm bg-yellow-300" />
          <div className="w-full">
            <div>
              <div className="py-2">
                <p className="font-bold">XYZ Payment</p>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-secondary">Today | 5:00 PM</p>
              <div className="bg-low-blue p-1.5 flex gap-1 items-center text-secondary">
                <Icon icon="majesticons:clock" fontSize={24} />
                <p>4h</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentRemainder;
