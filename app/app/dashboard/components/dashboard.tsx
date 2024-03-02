"use client";

import Box from "@/app/components/common/Container/Box/Box";
import SectionHead from "@/app/components/common/SectionHead/SectionHead";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Employees from "./employees";
import JobSummary from "./job-summary";
import PaymentRemainder from "./payment-remainder";

const Dashboard = () => {
  const router = useRouter();
  const handleViewEvents = () => {};
  useEffect(() => {
    localStorage.setItem("userId", "8ba6cb9c-2a7d-42d6-8868-50d77abf8af6")
    localStorage.setItem("name", "Jeet Shah")
    
  }, [])
  return (
    <div className="space-y-4">
      <SectionHead
        title="Dashboard"
        buttonPress={handleViewEvents}
        buttonText="View Events"
      />
      <div className="grid grid-cols-6 gap-7">
        <div className="col-span-4">
          <div className="flex flex-1 justify-between py-4">
            <p className="font-bold">Jobs</p>
            <Link
              href={"/app/jobs"}
              className="text-primary-blue font-semibold"
            >
              View All
            </Link>
          </div>
          <div>
            <JobSummary />
          </div>
        </div>
        <div className="col-span-2">
          <Box>
            <div>
              <div className="flex flex-1 justify-between">
                <p className="font-bold">Payment Reminders</p>
                <Link
                  href={"/app/dashboard/events"}
                  className="text-primary-blue font-semibold"
                >
                  View All
                </Link>
              </div>
              <div>
                <PaymentRemainder />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
