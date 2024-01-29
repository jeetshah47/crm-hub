import TodoContainer from "./TodoContainer";
import ProgressNav from "./progress-nav";
import TodoHead from "./todo-head";

const TodoList = () => {
  return (
    <div className="py-6">
      <TodoHead />
      {/* <ProgressNav /> */}
      <TodoContainer />
    </div>
  );
};

export default TodoList;
