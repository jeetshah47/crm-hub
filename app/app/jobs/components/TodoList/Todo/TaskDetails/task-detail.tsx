import Card from "@/app/components/common/Container/Cards/Card";
import React from "react";

const TaskDetails = () => {
  return (
    <Card background="bg-white" padding="p-5">
      <div className="flex gap-6 justify-between">
        <div>
          <p className="text-secondary">Task Name</p>
          <p className="font-semibold">Board</p>
        </div>

        <div>
          <p className="text-secondary">Width</p>
          <p className="font-semibold">Board</p>
        </div>
        <div>
          <p className="text-secondary">Height</p>
          <p className="font-semibold">Board</p>
        </div>
        <div>
          <p className="text-secondary">Quantity</p>
          <p className="font-semibold">Board</p>
        </div>

        <div>
          <p className="text-secondary">Volume</p>
          <p className="font-semibold">Board</p>
        </div>
        <div>
          <p className="text-secondary">Amount</p>
          <p className="font-semibold">Board</p>
        </div>
      </div>
    </Card>
  );
};

export default TaskDetails;
