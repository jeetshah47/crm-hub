import { Priority } from "../../types/CommonType";

export type JobRequest = {
  name: string;
  priority: Priority;
  description: string;
  contactNumber: string;
  contactName: string;
};

export type JobRequestParams = {
  params: {
    jobId: string;
  };
};
