"use client";
import InputBox from "@/app/components/common/Input/InputBox";
import React, { useState } from "react";
import { ServiceOptions, ProfessionOption } from "./mocks/MockData";
import SelectBox from "@/app/components/common/Input/SelectBox";

const AboutSelfForm = () => {
  const [interest, setInterest] = useState({
    service: "",
    profession: "",
    personal: false,
  });

  const handleServiceSelection = (value: string) => {
    setInterest({ ...interest, service: value });
  };
 
  const handleProfessionSelection = (value: string) => {
    setInterest({ ...interest, profession: value });
  };

  return (
    <div className="text-secondary w-2/5">
      <form>
        <div className="py-2">
          <SelectBox
            Options={ServiceOptions}
            label="Why will you use the service?"
            onChange={handleServiceSelection}
            value={interest.service}
          />
        </div>
        <div className="py-2">
          <SelectBox
            Options={ProfessionOption}
            label="What describes you best?"
            onChange={handleProfessionSelection}
            value={interest.profession}
          />
        </div>
      </form>
    </div>
  );
};

export default AboutSelfForm;
