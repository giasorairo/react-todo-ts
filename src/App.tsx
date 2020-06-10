import React, { useState } from 'react';
import TaskList from "./components/TaskList";
import { Task } from "./Types";
import './App.css';
// import Hello from "./components/Hello";

const initialState: Task[] = [
  {
    id: 2,
    title: "次のtodo",
    done: false
  },
  {
    id: 1,
    title: "最初のtodo",
    done: true
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);
  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
