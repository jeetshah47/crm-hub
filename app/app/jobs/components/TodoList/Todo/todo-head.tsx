'use client';
import React from 'react'
import {Icon} from "@iconify/react"

const TodoHead = () => {
  return (
    <div className="flex flex-1 justify-between">
        <p className="font-bold text-2xl">Tasks</p>
        <div className="rounded-xl p-3 bg-white">
          <Icon icon={"solar:filter-linear"} fontSize={24} />
        </div>
      </div>
  )
}

export default TodoHead