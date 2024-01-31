import TodoContainer from "./TodoContainer";
import TodoHead from "./todo-head";

const TodoList = () => {
  return (
    <div className="py-6">
      <TodoHead />
      <TodoContainer />
    </div>
  );
};

export default TodoList;
