"use client";
import InputBox from "@/app/components/common/Input/InputBox";
import OtpBox from "@/app/components/common/Input/OtpBox";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
export const PhoneForm = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    otp: "",
    email_address: "",
    password: "",
  });

  const handleSetOtp = (otp: string) => {
    setUser({ ...user, otp: otp });
  };

  return (
    <div className="text-secondary w-2/5">
      <form>
        <div className="flex space-x-3">
          <InputBox
            label="First Name"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            placeholder="First Name"
            type="text"
          />

          <InputBox
            label="Last Name"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            placeholder="Last Name"
            type="text"
          />
        </div>

        <div className="flex space-x-3">
          <div className="w-1/4">
            <InputBox
              label="Code"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              placeholder="+91"
              type="text"
            />
          </div>
          <InputBox
            label="Mobile Number"
            value={user.mobile_number}
            onChange={(e) =>
              setUser({ ...user, mobile_number: e.target.value })
            }
            placeholder="7286464984"
            type="text"
          />
        </div>
        <div>
          <OtpBox
            value={user.otp}
            onChange={handleSetOtp}
            otpLength={4}
            label="Enter Otp"
          />
          <div className="bg-low-blue py-6 px-5   text-primary-blue font-semibold flex hidden gap-2 rounded-md">
            <Icon icon={"flat-color-icons:info"} fontSize={24} />
            <p>
              SMS was sent to your number +1 345 673-56-67 It will be valid for
              01:25
            </p>
          </div>
          <div>
            <InputBox
              value={user.email_address}
              label="Email Address"
              placeholder="youremail@gmail.com"
              onChange={(e) =>
                setUser({ ...user, email_address: e.target.value })
              }
              type="text"
            />
          </div>
          <div>
            <InputBox
              value={user.password}
              label="Password"
              placeholder=""
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              type="password"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
