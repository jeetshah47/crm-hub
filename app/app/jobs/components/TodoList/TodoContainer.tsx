import React, { useState } from "react";
import { Progress } from "./progress";
import Card from "@/app/components/common/Container/Cards/Card";
const TodoContainer = () => {
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };
  const handleAllowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    console.log(data);
  };

  const itemList = [
    {
      data: "Task 1ud",
      id: 1,
      type: "to-do",
    },
    {
      data: "Task 2ud",
      id: 2,
      type: "to-do",
    },
    {
      data: "Task 3ud",
      id: 3,
      type: "done",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {Progress.map((title) => (
        <div key={title.type}>
          <div
            className={`border-4 bg-${title.color} border-solid  rounded-3xl py-2 px-2 w-48 text-center`}
            onDragOver={handleAllowDrop}
            onDrop={handleOnDrop}
          >
            <p className="font-bold">{title.label}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default TodoContainer;
