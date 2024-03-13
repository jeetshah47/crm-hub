import { useParams, useSearchParams } from "next/navigation";
import ProjectGroup from "./Project/ProjectGroup";
import TodoContainer from "./TodoContainer";
import TodoHead from "./todo-head";
import TaskBoard from "./TaskDetails/task-board";
import Modal from "@/app/components/common/Modal/Modal";
import { TaskType } from "@/app/api/types/CommonType";
import { useEffect, useState } from "react";
import TaskForm from "../../JobCard/TaskForm";
import { createTask, editTask, getTask } from "../../../apis/TaskApi";
import { TaskRequest } from "@/app/api/jobs/task/types/TaskApiType";
import Loader from "@/app/components/common/Loader/Loader";

type TaskData = Partial<TaskType>;

type TodoListProps = {
  showModal: boolean;
  setShowModal: () => void;
  data: TaskData[];
};

const TodoList = ({ showModal, setShowModal }: TodoListProps) => {
  const params = useSearchParams();
  const jobId = params.get("jobId")

  const [newTask, setNewTask] = useState<TaskRequest>({} as TaskRequest);
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchTask = async (jobId: string) => {
    setLoading(true);
    try {
      const task = await getTask(jobId)
      console.log(task.data);
      setTaskList(task.data);
      setLoading(false)
    }
    catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const handleChangeTaskStatus = async (taskId: string, data: TaskType) => {
    setLoading(true);
    try {
      const task = await editTask(taskId, data);
      console.log(task);
      setLoading(false);
    }
    catch (err) {
      console.log(err);
      setLoading(false);
      if(jobId) {
        fetchTask(jobId);
      }
    }
  }

  const handleNewDataChange = () => {

  }

  useEffect(() => {
    if (jobId && jobId?.length > 0) {
      fetchTask(jobId);
    }
  }, [jobId]);

  return (
    <div className="py-2 flex-auto ">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-6 gap-6 flex-auto">
          <div className="col-span-1  relative">
            <ProjectGroup />
          </div>
          {params.get("view") ? (
            <div className="col-span-5 flex flex-col">
              <TaskBoard />
            </div>
          ) : (
            <div className="col-span-5 relative">
              <div className="h-full relative">
                <div className="flex flex-col h-full absolute w-full">
                  {loading && <Loader />}
                  <TodoContainer
                    taskList={taskList}
                    setTaskList={setTaskList}
                    onChange={handleChangeTaskStatus}
                  />
                </div>
              </div>
            </div>
          )}
          <Modal
            title="Add Task"
            buttonAction={() => { }}
            buttonText=""
            display={showModal}
          >
            <TaskForm data={newTask} dataHandler={setNewTask}  />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
