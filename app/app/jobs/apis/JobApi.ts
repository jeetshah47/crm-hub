import { JobRequest } from "@/app/api/jobs/types/JobRequest";
import axios from "axios";

const host = process.env.NEXTAUTH_API_URL;

export const createJob = async (data: JobRequest) => {
  const res = await axios.post(`${host}/jobs`, {
    ...data,
  });
  return res.data;
};
