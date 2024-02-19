import FilterGroup from "./FilterGroup";
import TodoContainer from "./TodoContainer";
import TodoHead from "./todo-head";

const TodoList = () => {
  return (
    <div className="py-6 flex h-full flex-col border">
      <TodoHead />
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-1">
          <FilterGroup />
        </div>
        <div className="col-span-5">
          <TodoContainer />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
