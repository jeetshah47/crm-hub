import { steps } from "../../constants/Steps";
import StepListCard from "./step-list-card";

interface StepListProps {
  id: number;
}

const StepList = ({id}: StepListProps) => {
  return (
    <div className="bg-blue-500 rounded-3xl py-6 flex justify-center">
      <div className="py-4">
        <p className="text-4xl font-semibold text-white">Get Started</p>
        <div className="py-10">
          {steps.map((step) => (
            <StepListCard activeId={id} key={step.id} {...step}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepList;
