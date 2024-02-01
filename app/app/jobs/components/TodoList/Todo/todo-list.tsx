import FilterGroup from "./FilterGroup";
import TodoContainer from "./TodoContainer";
import TodoHead from "./todo-head";

const TodoList = () => {
  return (
    <div className="py-6">
      <TodoHead />
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <FilterGroup />
        </div>
        <div className="col-span-4">
          <TodoContainer />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
