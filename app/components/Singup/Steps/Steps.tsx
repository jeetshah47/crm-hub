"use client"
import { useState } from "react";
import AboutSelfForm from "./Forms/AboutSelfForm";
import CompanyForm from "./Forms/CompanyForm";
import InviteTeam from "./Forms/InviteTeam";
import { PhoneForm } from "./Forms/PhoneForm";
import Success from "./Forms/Success";
import { Icon } from "@iconify/react"
interface StepsProps {
  id: number;
}

type StepFormMapType = {
  [index: number]: JSX.Element
}

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepFormMap: StepFormMapType = {
    1: <PhoneForm />,
    2: <AboutSelfForm />,
    3: <Success />
    // 3: <CompanyForm />,
    // 4: <InviteTeam />,
  }

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }
  const handlePrevStep = () => {
    if (currentStep - 1 >= 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="col-span-4 bg-white rounded-3xl relative">
      <div className="grid grid-cols-1 place-items-center py-6">
        <p className="font-bold text-primary-blue">STEP {currentStep}/3</p>
        <div className="py-2">
          <p className="text-2xl font-bold">Valid your phone</p>
        </div>
        {stepFormMap[currentStep]}
      </div>
      <div className="absolute align-bottom	justify-self-end bottom-0 right-0 w-full">
        <div className=" h-px bg-[#E4E6E8]" />
        <div className="py-4 flex flex-1 justify-between">
          <button onClick={handlePrevStep} className="flex items-center gap-2 rounded-lg px-10 py-2  text-primary-blue hover:shadow-sm duration-300">
            <Icon icon={"solar:arrow-left-outline"} fontSize={24} /> <p> Previous Step </p>
          </button>
          <button onClick={handleNextStep} className="flex items-center gap-2 bg-blue-500 rounded-lg px-10 py-2 text-white shadow-lg shadow-blue-500/50 hover:shadow-sm duration-300">
            <p>Next Step</p> <Icon icon={"solar:arrow-right-outline"} fontSize={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
