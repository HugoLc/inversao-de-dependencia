//@ts-ignore
import React, { useState } from "react";
import TaskServiceImpl from "./TaskServiceImpl";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const taskService = new TaskServiceImpl(); 

  const handleAddTask = () => {
    taskService.addTask(task);
    setTasks(taskService.getTasks());
    setTask("");
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </div>
  );
};

export default TodoApp;
