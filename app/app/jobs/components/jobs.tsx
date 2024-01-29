"use client";

import Box from "@/app/components/common/Container/Box/Box";
import SectionHead from "@/app/components/common/SectionHead/SectionHead";
import React from "react";
import TodoList from "./TodoList/todo-list";

const Jobs = () => {
  return (
    <div>
      <SectionHead title="Jobs" buttonText="Add Jobs" buttonPress={() => {}} />
      <TodoList />
    </div>
  );
};

export default Jobs;
