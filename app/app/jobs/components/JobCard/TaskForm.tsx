import { TaskRequest } from "@/app/api/jobs/task/types/TaskApiType";
import InputBox from "@/app/components/common/Input/InputBox";
import SelectBox from "@/app/components/common/Input/SelectBox";
import React from "react";

type TaskProps = {
  data: TaskRequest;
  dataHandler: (params: TaskRequest) => void;
};

const TaskForm = ({ data, dataHandler }: TaskProps) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dataHandler({ ...data, [e.target.name]: e.target.value });
  };

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    dataHandler({ ...data, [e.target.name]: parseInt(e.target.value) });
  }

  const handleSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dataHandler({...data, unit: e.target.value})
  };

  

  return (
    <div>
      <InputBox
        name="detail"
        label="Details"
        type="text"
        value={data.detail}
        onChange={handleTextChange}
      />
      <div className="flex flex-1 gap-2">
        <InputBox
          name="width"
          label="Width"
          type="number"
          value={data.width}
          onChange={handleNumericChange}
        />
        <InputBox
          name="height"
          label="Height"
          type="number"
          value={data.height}
          onChange={handleNumericChange}
        />
      </div>
      <SelectBox
        name="unit"
        value={data.unit}
        options={[
          { label: "Kg", value: "kg" },
          { label: "Sqft", value: "sqft" },
        ]}
        label="Unit"
        onChange={handleSelectBox}
      />
      
      <InputBox
        name={"rate"}
        label="Rate"
        type="number"
        value={data.rate}
        onChange={handleNumericChange}
      />
  
      <InputBox
        name={"quantity"}
        label="Quantity"
        type="number"
        value={data.quantity}
        onChange={handleNumericChange}
      />
    </div>
  );
};

export default TaskForm;
/**
 *  jobId: string;
  detail: string;
  width: number;
  height: number;
  unit: string;
  rate: number;
 */
