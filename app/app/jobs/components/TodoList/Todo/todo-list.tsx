import { useParams, useSearchParams } from "next/navigation";
import FilterGroup from "./Filter/FilterGroup";
import TodoContainer from "./TodoContainer";
import TodoHead from "./todo-head";
import TaskBoard from "./TaskDetails/task-board";

const TodoList = () => {
  const params = useSearchParams();
  console.log("q", params.get("view"));

  return (
    <div className="py-2 flex-auto">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-6 gap-6 flex-auto">
          <div className="col-span-1">
            <FilterGroup />
          </div>
          {params.get("view") ? (
            <div className="col-span-5 flex flex-col">
              <TaskBoard />
            </div>
          ) : (
            <div className="col-span-5 flex flex-col">
              <TodoHead />
              <TodoContainer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
