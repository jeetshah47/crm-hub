"use client";
import Button from "@/app/components/common/Button/Button";
import DatePicker from "@/app/components/common/Input/DatePicker";
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

  const handleOnChange = () => {
    
  };

  const dateFormat = () => {
    const localDate = new Date();
    return `${localDate.getFullYear()}-${localDate.getMonth() + 1}-${localDate.getDate()}`;
  };

  const AvatarMap = Array.from({ length: 11 }, (_, index) => index);
  return (
    <div className="w-full bg-white p-4 rounded-3xl">
      <div className="flex flex-auto items-center justify-center gap-10">
        <div className="w-2/5">
        <p className="font-bold text-3xl py-1">Add Project / Job</p>
          <form className="w-full">
            <InputBox
              value={job.name}
              onChange={handleOnChange}
              type="text"
              label="Project Name / Organization Name"
            />
            <div>
              <DatePicker
                label="Start Date"
                value={dateFormat()}
                onChange={handleOnChange}
                placeholder="Start Date"
              />
            </div>
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
        <div className="p-4 rounded-2xl border border-green-200 w-1/3">
          <p className="text-lg font-bold ">Select Image</p>
          <div className="text-secondary py-2">
            Select or upload an avatar for the project (available formats: jpg,
            png)
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-4 py-1">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            {AvatarMap.map((item) => (
              <picture key={item}>
                {" "}
                <img alt="imaeg" src={`/icons/avatar/Image-${item}.svg`} />
              </picture>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <Button onClick={() => {}} text="Save Project" />
      </div>
    </div>
  );
};

export default JobForm;
