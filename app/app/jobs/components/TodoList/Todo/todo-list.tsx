import FilterGroup from "./Filter/FilterGroup";
import TodoContainer from "./TodoContainer";
import TodoHead from "./todo-head";

const TodoList = () => {
  return (
    <div className="py-2 flex-auto">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-5 gap-6 flex-auto">
          <div className="col-span-1">
            <FilterGroup />
          </div>
          <div className="col-span-4 flex flex-col">
            <TodoHead />
            <TodoContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
