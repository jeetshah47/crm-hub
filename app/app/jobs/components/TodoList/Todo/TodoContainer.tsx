import React, { useEffect, useState } from "react";
import { Progress } from "./progress";
import { TaskType } from "@/app/api/types/CommonType";
import MessageBox from "@/app/components/common/MessageBox/MessageBox";

type TaskProps = {
  taskList: TaskType[];
  setTaskList: (params: any) => void;
  onChange: (taskId: string, data: TaskType) => void;
}

const TodoContainer = ({ taskList, setTaskList, onChange }: TaskProps) => {
  // const [taskList, setTaskList] = useState<TaskType[]>([]);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("job", e.currentTarget.id);

    // e.currentTarget.classList.add('opacity-100')
  };

  const handleOnDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("opacity-0");
    // console.log(e.currentTarget.classList);
  };

  const handleEndDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("opacity-0");
  };

  const handleAllowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("drag exit");
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("job");
    let boxId = e.currentTarget.id;
    let cloneItemList = [...taskList];
    let elementIndex = 0;
    cloneItemList.map((item, index) => {
      if (item.id === (data)) {
        item.status = boxId;
        elementIndex = index;
      }
    });

    const cloneElement = cloneItemList[elementIndex];
    console.log(cloneItemList.splice(elementIndex, 1));
    cloneItemList.push(cloneElement);

    setTaskList(cloneItemList);
    onChange(cloneElement.id, cloneElement);
    console.log("current box id", e.currentTarget.id);

    console.log(data);
  };

  const cutString = (data: string, size: number) => {
    return data.length > size ? `${data.substring(0, size)}...` : data;
  }

  return (
    <div className="grid grid-cols-4 gap-6   flex-auto overflow-auto">
      {!taskList?.length && <MessageBox message="No Task Added" />}
      {taskList?.length > 0 && Progress.map((title) => (
        <div
          key={title.type}
          onDragOver={handleAllowDrop}
          onDrop={handleOnDrop}
          className=""
          id={title.type}
        >
          <div className="flex flex-col h-full ">
            <div className="flex-initial pb-2 sticky">
              <div
                className={`rounded-2xl py-3 px-2 w-48 text-center bg-opacity-15 ${title.style}`}
              >
                <p className={`font-bold`}>{title.label}</p>
              </div>
            </div>
            <div className="space-y-2">
              {taskList
                .filter((items) => items.status === title.type)
                .map((value) => (
                  <div
                    key={value.id}
                    id={value.id.toString()}
                    draggable={true}
                    onDragStart={handleDrag}
                    onDrag={handleOnDrag}
                    onDragEnd={handleEndDrag}
                    className="bg-white rounded-xl w-48 p-5 drop-shadow-md"
                  >
                    <p className="text-secondary">{cutString(value.id, 8)}</p>
                    <p>{cutString(value.detail, 15)}</p>
                    <div className="flex  justify-between">
                      <div className="py-1.5 px-2 rounded-xl  bg-low-blue">W {value.width}</div>
                      <div className="py-1.5 px-2 rounded-xl  bg-low-blue">H {value.height}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoContainer;
