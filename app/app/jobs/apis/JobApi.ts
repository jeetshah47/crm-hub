import { JobRequest } from "@/app/api/jobs/types/JobRequest";
import { JobType } from "@/app/api/types/CommonType";
import axios from "axios";

const host = process.env.NEXT_PUBLIC_BACKEND_API_URL;
console.log(host);

export const createJob = async (data: JobRequest) => {
  const res = await axios.post(`${host}/jobs`, {
    ...data,
  });
  return res.data;
};

export const getJobs = async () => {
  const res = await axios.get<JobType[]>(`${host}/jobs`);
  return res.data;
}

export const editJob = async (data: JobRequest) => {
  const res = await axios.patch(`${host}/jobs`, {
  ...data,
  });
  return res.data;
}

export const deleteJob = async (id: string) => {
  const res = await axios.delete(`${host}/jobs/${id}`);
  return res.data;
}
