import { PhoneForm } from "./Forms/PhoneForm";

interface StepsProps {
  id: number;
}

const Steps = ({ id }: StepsProps) => {
  return (
    <div className="col-span-4 bg-white rounded-3xl relative">
      <div className="grid grid-cols-1 place-items-center py-6">
        <p className="font-bold text-primary-blue">STEP {id}/4</p>
        <div className="py-2">
          <p className="text-2xl font-bold">Valid your phone</p>
        </div>
        <PhoneForm />
      </div>
      <div className="absolute align-bottom	justify-self-end bottom-0 right-0 w-full">
        <div className=" h-px bg-[#E4E6E8]" />
        <div className="py-4 flex flex-1 justify-end">
          <button className="bg-blue-500 rounded-lg px-10 py-2 text-white shadow-lg shadow-blue-500/50 hover:shadow-sm duration-300">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
