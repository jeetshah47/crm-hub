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
  const handleShowAddModal = () => {
    router.push(`/app/jobs/add-job`);
  };

  return (
    <div className="h-full flex flex-col text-primary-content">
      <div className="flex-initial">
        <SectionHead
          title="Jobs"
          buttonText="Add Job"
          buttonPress={handleShowAddModal}
        />
      </div>
      <TodoList />
      
    </div>
  );
};

export default Jobs;
