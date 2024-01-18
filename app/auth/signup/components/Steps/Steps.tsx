import { PhoneForm } from "./Forms/PhoneForm";

interface StepsProps {
    id: number;
}

const Steps = ({ id }: StepsProps) => {
    return (
        <div className="col-span-4 bg-white rounded-3xl">
            <div className="grid grid-cols-1 place-items-center py-6">
                <p className="font-semibold text-blue-400">STEP {id}/4</p>
                <div className="py-2">
                    <p className="text-2xl font-bold">Valid your phone</p>
                </div>
                <PhoneForm />
            </div>
        </div>
    )
}

export default Steps