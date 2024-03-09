import { useParams, useSearchParams } from "next/navigation";
import ProjectGroup from "./Project/ProjectGroup";
import TodoContainer from "./TodoContainer";
import TodoHead from "./todo-head";
import TaskBoard from "./TaskDetails/task-board";
import Modal from "@/app/components/common/Modal/Modal";
import { TaskType } from "@/app/api/types/CommonType";

type TaskData = Partial<TaskType>

type TodoListProps = {
  showModal: boolean;
  setShowModal: () => void;
  data: TaskData[];
}

const TodoList = ({ }: TodoListProps) => {
  const params = useSearchParams();
  console.log("q", params.get("view"));

  return (
    <div className="py-2 flex-auto ">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-6 gap-6 flex-auto">
          <div className="col-span-1 bg-white relative">
            <ProjectGroup />
          </div>
          {params.get("view") ? (
            <div className="col-span-5 flex flex-col">
              <TaskBoard />
            </div>
          ) : (
            <div className="col-span-5 relative ">
              <div className="h-full relative">
                <div className="flex flex-col h-full absolute w-full">
                  <TodoHead />
                  <TodoContainer />
                </div>
              </div>
            </div>
          )}
          <Modal title="s" buttonAction={() => { }} buttonText="" display={false}>
            <div>

            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
