"use client";

import Box from "@/app/components/common/Container/Box/Box";
import SectionHead from "@/app/components/common/SectionHead/SectionHead";
import React, { useState } from "react";
import TodoList from "./TodoList/Todo/todo-list";
import Modal from "@/app/components/common/Modal/Modal";
import Jobform from "./TodoList/AddJob/Jobform";

const Jobs = () => {
  const [showModal, setShowModal] = useState(false);
  // const handle
  const handleShowAddModal = () => {
    setShowModal(true);
  }

  return (
    <div>
      <SectionHead title="Jobs" buttonText="Add Jobs" buttonPress={handleShowAddModal} />
      <TodoList />
      <Modal
        display={showModal}
        title="Add Task"
        buttonText="Save Task"
        buttonAction={setShowModal}
      >
        <Jobform />
      </Modal>
    </div>
  );
};

export default Jobs;
