export type Priority = "high" | "medium" | "low";
export type Status = "pending" | "inprogress" | "inreview" | "done";
export type Unit = "kg" | "sqft";

interface UserType {
  id: string;
  name: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  createdAt?: string;
  updatedAt?: string;
  Jobs?: JobType[];
}

interface ContactType {
  id: string;
  name: string;
  job: JobType[];
}

interface JobType {
  id: string;
  name: string;
  priority: string;
  description: Priority;
  status: string;
  userId: string;
  contact: ContactType;
  createdAt?: Date;
  updatedAt?: Date;
  user?: UserType;
  payments?: PaymentType[];
  task?: TaskType[];
}

interface PaymentType {
  id: string;
  jobId: string;
  job?: JobType[];
  remainder: PaymentRemaindersType[];
  detail: string;
  method: string;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TaskType {
  id: string;
  jobId: string;
  job?: JobType[];
  detail: string;
  width: number;
  height: number;
  unit: Unit
  createdAt?: Date;
  updatedAt?: Date;
  rate: number;
}

interface PaymentRemaindersType {
  id: string;
  paymentId: string;
  payment?: PaymentType;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { UserType, JobType, PaymentType, TaskType, PaymentRemaindersType };
