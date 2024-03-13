import { TaskRequest } from "@/app/api/jobs/task/types/TaskApiType";
import { TaskType } from "@/app/api/types/CommonType";
import axios from "axios";

const host = process.env.NEXT_PUBLIC_BACKEND_API_URL;
console.log(host);

export const createTask = async (data: TaskRequest) => {
  const res = await axios.post(`${host}/jobs/task`, {
    ...data,
  });
  return res.data;
};

export const getTask = async (jobId: string) => {
  const res = await axios.get(`${host}/jobs/task?jobId=${jobId}`);
  return res.data;
};

export const editTask = async (taskId: string, data: TaskType) => {
  const res = await axios.patch(`${host}/jobs/task/${taskId}`, {
    ...data,
  });
  return res.data;
};
