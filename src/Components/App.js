import React from 'react';
// import './App.css';
import tasks from '../data/tasks';

function App() {
  return (
    <div>
      <h1>Your Tasks</h1>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.description}</li>)}
      </ul>
    </div>
  );
}

export default App;