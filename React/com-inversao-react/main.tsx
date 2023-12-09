//@ts-ignore
import React from "react";
import TodoApp from "./TodoApp";
import TaskServiceImpl from "./TaskServiceImpl";

function App() {
  const taskService = new TaskServiceImpl();
  return (
    <div className="App">
      <TodoApp taskService={taskService} />
    </div>
  );
}
export default App;
