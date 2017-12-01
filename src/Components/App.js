import React from 'react';
// import './App.css';
import tasks from '../data/tasks';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  return (
    <div>
      <h1>Your Tasks</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
