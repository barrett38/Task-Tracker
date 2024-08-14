import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <Header />
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
