import React from "react";
import TodoHead from "../todo-head";
import TaskDetails from "./task-detail";

const TaskBoard = () => {
  return (
    <div className="">
      <TodoHead />
      <div className="py-2">
        <div className="bg-blue-chalk rounded-xl py-2 text-center font-bold">
          <p>Active Task</p>
        </div>
        <div className="py-2 flex flex-col items-center">
          <div className="w-2/3 space-y-3 ">
            <TaskDetails />
            <TaskDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
