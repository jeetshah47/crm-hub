import InputBox from "@/app/components/common/Input/InputBox";
import SelectBox from "@/app/components/common/Input/SelectBox";
import TextBox from "@/app/components/common/Input/TextBox";
import { useState } from "react";

const JobForm = () => {
  const [job, setJob] = useState({
    name: "",
    priority: "",
    description: "",
  });

  const priorityOptions = [
    {
      label: "Low",
      value: 1,
    },
    {
      label: "Medium",
      value: 2,
    },
    {
      label: "High",
      value: 3,
    },
  ];

  const handleOnChange = () => {};

  return (
    <div className="w-96">
      <form>
        <InputBox
          value={job.name}
          onChange={handleOnChange}
          type="text"
          label="Party Name"
        />
        <div>
          <SelectBox
            label="Priority"
            onChange={handleOnChange}
            value={job.priority}
            options={priorityOptions}
          />
        </div>

        <div>
          <TextBox label="Description" onChange={handleOnChange} />
        </div>
      </form>
    </div>
  );
};

export default JobForm;
