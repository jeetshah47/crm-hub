import { steps } from "@/app/auth/signup/constants/Steps";
import StepListCard from "./step-list-card";

const StepList = () => {
  return (
    <div className="bg-primary-blue rounded-3xl py-6 flex justify-center">
      <div className="py-4">
        <p className="text-4xl font-semibold text-white">Get Started</p>
        <div className="py-10">
          {steps.map((step) => (
            <StepListCard activeId={1} key={step.id} {...step}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepList;
