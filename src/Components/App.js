import React from 'react';
// import './App.css';
import tasks from '../data/tasks';
import TaskList from './TaskList';

function App() {
  return (
    <div>
      <h1>Your Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
