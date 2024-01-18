"use client";
import InputBox from "@/app/auth/common/Input/InputBox";
import React, { useState } from "react";

export const PhoneForm = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    otp: "",
    email_address: "",
    password: "",
  });
  return (
    <div>
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
            onChange={(e) => setUser({ ...user, mobile_number: e.target.value })}
            placeholder="7286464984"
            type="text"
          />
        </div>

        <div>
            
        </div>

      </form>
    </div>
  );
};
