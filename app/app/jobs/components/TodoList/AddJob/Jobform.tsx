import InputBox from "@/app/components/common/Input/InputBox";
import SelectBox from "@/app/components/common/Input/SelectBox";
import TextBox from "@/app/components/common/Input/TextBox";
import React, { useState } from "react";

const Jobform = () => {
  const [job, setJob] = useState({
    name: "",
    type: "",
    startDate: "",
    priority: 1,
    description: "",
  });

  const priorities = [
    {
      label: "High",
      value: 1,
    },
    {
      label: "Medium",
      value: 2,
    },
    {
      label: "Low",
      value: 3,
    },
  ];

  return (
    <div>
      <InputBox
        type="text"
        label="Job Name"
        value={job.name}
        onChange={(e) => setJob({ ...job, name: e.target.value })}
        placeholder="Task Name"
      />
      <InputBox
        type="text"
        label="Job Name"
        value={job.type}
        onChange={(e) => setJob({ ...job, type: e.target.value })}
        placeholder="Task Name"
      />

      <SelectBox
        value={job.type}
        options={priorities}
        label="Priority"
        onChange={(e) => setJob({ ...job, priority: parseInt(e.target.value) })}
      />

      <TextBox
        value={job.description}
        onChange={(e) => setJob({ ...job, description: e.target.value })}
        label="Description"
        placeholder="Add some description of the job"
      />
    </div>
  );
};

export default Jobform;
