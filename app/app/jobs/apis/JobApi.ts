import { JobRequest } from "@/app/api/jobs/types/JobRequest";
import axios from "axios";

const host = process.env.NEXTAUTH_API_URL;

export const createJob = async (data: JobRequest) => {
  const res = await axios.post(`${host}/jobs`, {
    ...data,
  });
  return res.data;
};

export const getJobs = async () => {
  const res = await axios.get(`${host}/jobs`);
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
