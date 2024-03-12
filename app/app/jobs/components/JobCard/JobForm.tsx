"use client";
import Button from "@/app/components/common/Button/Button";
import DatePicker from "@/app/components/common/Input/DatePicker";
import InputBox from "@/app/components/common/Input/InputBox";
import SelectBox from "@/app/components/common/Input/SelectBox";
import TextBox from "@/app/components/common/Input/TextBox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {Icon} from "@iconify/react"
import { createJob } from "../../apis/JobApi";
import { JobRequest } from "@/app/api/jobs/types/JobRequest";

const JobForm = () => {
  const [job, setJob] = useState<JobRequest>({
    name: "",
    contactName: "",
    contactNumber: "",
    priority: "low",
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    console.log(e.target.value, e.currentTarget.name);
    
    setJob({...job, [e.target.name] : e.target.value})
  };

  const handleOnChangeOption = () => {

  }

  const handleOnChangeTextBox = () => {

  }

  const dateFormat = () => {
    const localDate = new Date();
    return `${localDate.getFullYear()}-${localDate.getMonth() + 1}-${localDate.getDate()}`;
  };

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const saveJob = await createJob({...job})
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full bg-white p-4 rounded-3xl  h-full flex justify-center relative overflow-auto">
      <div className="absolute w-2/3">
        <div className="w-full ">
          <p className="font-bold text-2xl text-black">Add Project / Job</p>
          <form onSubmit={handleSubmit} className="w-full">
            <InputBox
              value={job.name}
              onChange={handleOnChange}
              type="text"
              label="Project Name / Organization Name"
              name="name"
            />
            <div className="flex items-center gap-2">
              <InputBox
                value={job.contactName}
                onChange={handleOnChange}
                type="text"
                label="Contact Person Name"
                name="contactName"
              />

              <InputBox
                value={job.contactNumber}
                onChange={handleOnChange}
                type="text"
                label="Contact Number"
                name="contactNumber"
              />
            </div>
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
                onChange={handleOnChangeOption}
                value={job.priority}
                options={priorityOptions}
              />
            </div>
            <div>
              <TextBox label="Description" onChange={handleOnChangeTextBox} />
            </div>
            <Button text="Add Job" onClick={() => {}}   />
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default JobForm;
