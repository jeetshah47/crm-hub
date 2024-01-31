"use client";
import InputBox from "@/app/components/common/Input/InputBox";
import React, { HTMLAttributes, useState } from "react";
import { ServiceOptions, ProfessionOption } from "./mocks/MockData";
import SelectBox from "@/app/components/common/Input/SelectBox";

const AboutSelfForm = () => {
  const [interest, setInterest] = useState({
    service: "",
    profession: "",
    personal: false,
  });

  const handleServiceSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInterest({ ...interest, service: e.target.value });
  };

  const handleProfessionSelection = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInterest({ ...interest, profession: e.target.value });
  };

  return (
    <div className="text-secondary w-2/5">
      <form>
        <div className="py-2">
          <SelectBox
            options={ServiceOptions}
            label="Why will you use the service?"
            onChange={handleServiceSelection}
            value={interest.service}
          />
        </div>
        <div className="py-2">
          <SelectBox
            options={ProfessionOption}
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
