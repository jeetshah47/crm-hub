import { TaskRequest } from '@/app/api/jobs/task/types/TaskApiType'
import InputBox from '@/app/components/common/Input/InputBox';
import React from 'react'

type TaskProps = {
  data: TaskRequest;
  dataHandler: (params: any) => void;
}

const TaskForm = ({ data, dataHandler }: TaskProps) => {

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div>
      <InputBox name='detail' label='Details' type='text' value={data.detail} onChange={handleTextChange} />
    </div>
  )
}

export default TaskForm;
/**
 *  jobId: string;
  detail: string;
  width: number;
  height: number;
  unit: string;
  rate: number;
 */