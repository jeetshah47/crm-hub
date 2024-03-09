"use client";

import Box from "@/app/components/common/Container/Box/Box";
import SectionHead from "@/app/components/common/SectionHead/SectionHead";
import React, { useState } from "react";
import TodoList from "./TodoList/Todo/todo-list";
import Modal from "@/app/components/common/Modal/Modal";
import TaskForm from "./TodoList/AddJob/TaskForm";
import JobForm from "./JobCard/JobForm";
import { useRouter } from "next/navigation";

const Jobs = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [itemList, setItemList] = useState([
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
    {
      data: "Task 4ud",
      id: 4,
      type: "done",
    },
    {
      data: "Task 5ud",
      id: 5,
      type: "in-review",
    },
    {
      data: "Task 6ud",
      id: 6,
      type: "to-do",
    },
    {
      data: "Task 7ud",
      id: 7,
      type: "done",
    },
    {
      data: "Task 8ud",
      id: 8,
      type: "done",
    },
  ]);

  const handleShowAddModal = () => {
    router.push(`/app/jobs/add-job`);
  };

  const handleShowAddTaskModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="flex flex-col flex-auto text-black">
      <div className="flex-initial">
        <SectionHead
          title="Jobs"
          buttonText="Add Task"
          buttonPress={handleShowAddModal}
        />
      </div>
      <TodoList showModal={showModal} data={[{}]} setShowModal={handleShowAddTaskModal} />
    </div>
  );
};

export default Jobs;
