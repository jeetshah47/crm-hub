import React, { useState } from "react";
import { Progress } from "./progress";

const TodoContainer = () => {
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
    let cloneItemList = [...itemList];
    let elementIndex = 0;
    cloneItemList.map((item, index) => {
      if (item.id === parseInt(data)) {
        item.type = boxId;
        elementIndex = index;
      }
    });

    const cloneElement = cloneItemList[elementIndex];
    console.log(cloneItemList.splice(elementIndex, 1));
    cloneItemList.push(cloneElement);

    setItemList(cloneItemList);
    console.log("current box id", e.currentTarget.id);

    console.log(data);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag over", e.currentTarget.id);
    e.currentTarget.classList.add("bg-modal");
    e.currentTarget.classList.add("bg-opacity-15");
  };
  const handleDragExit = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag exit", e.currentTarget.id);
    e.currentTarget.classList.remove("bg-modal");
    e.currentTarget.classList.remove("bg-opacity-15");
  };

  return (
    <div className="grid grid-cols-4 gap-6   flex-auto overflow-auto">
      {Progress.map((title) => (
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
              {itemList
                .filter((items) => items.type === title.type)
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
                    <p className="text-secondary">TS000015</p>
                    <p>{value.data}</p>
                    <div className="flex  justify-between">
                    <div className="py-1.5 px-2 rounded-xl  bg-low-blue">W 28</div>
                    <div className="py-1.5 px-2 rounded-xl  bg-low-blue">H 28</div>
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
