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
import { ScaleLoader } from "react-spinners";
import Loader from "@/app/components/common/Loader/Loader";

const JobForm = () => {
  const [job, setJob] = useState<JobRequest>({
    name: "",
    contactName: "",
    contactNumber: "",
    priority: "low",
    description: "",
  });

  const [loading, setLoading] = useState(false);

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
    
    setJob({...job, [e.target.name] : e.target.value})
  };

  const handleOnChangeOption = () => {

  }

  const handleOnChangeTextBox = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setJob({...job, description: e.currentTarget.value})
  }

  const dateFormat = () => {
    const localDate = new Date();
    return `${localDate.getFullYear()}-${localDate.getMonth() + 1}-${localDate.getDate()}`;
  };

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const saveJob = await createJob({...job})
      console.log(saveJob);
      if(saveJob?.status === 404) {
        alert("Job Failed saved in database")
        setLoading(false)
      }
      else {
        setLoading(false)
        router.push('/app/jobs')
      }
    }
    catch(err) {
      console.log(err);
      setLoading(false)
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
              <TextBox label="Description" value={job.description} onChange={handleOnChangeTextBox} />
            </div>
            {loading && <Loader />}
            <Button text="Add Job" onClick={() => {}}   />
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default JobForm;
