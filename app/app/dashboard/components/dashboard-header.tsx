"use client";

import Box from "@/app/components/common/Container/Box/Box";
import SectionHead from "@/app/components/common/SectionHead/SectionHead";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Employees from "./employees";

const Dashboard = () => {
  const router = useRouter();
  const handleViewEvents = () => {};
  return (
    <div className="space-y-4">
      <SectionHead
        title="Dashboard"
        buttonPress={handleViewEvents}
        buttonText="View Events"
      />
      <div className="grid grid-cols-6 gap-7">
        <div className="col-span-4">
          <Box>
            <div className="flex flex-1 justify-between">
              <p className="font-bold">Workload</p>
              <Link
                href={"/app/dashboard/events"}
                className="text-primary-blue font-semibold"
              >
                View All
              </Link>
            </div>
            <div>
                <Employees />
            </div>
          </Box>
        </div>
        <div className="col-span-2">
          <Box>
            <div>
            <div className="flex flex-1 justify-between">
              <p className="font-bold">Nearest Event</p>
              <Link
                href={"/app/dashboard/events"}
                className="text-primary-blue font-semibold"
              >
                View All
              </Link>
            </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
