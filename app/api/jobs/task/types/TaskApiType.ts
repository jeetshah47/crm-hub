export type TaskParams = {
  params: {
    task: string;
  };
};

export type TaskRequest = {
  jobId: string;
  detail: string;
  width: number;
  height: number;
  unit: string;
  rate: number;
}
