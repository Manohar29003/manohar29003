import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task && priority) {
      setTasks([...tasks, { task, priority }]);
      setTask('');
      setPriority('');
    }
  };

  const sortedTasks = tasks.sort((a, b) => a.priority - b.priority);

  return (
    <div className="App">
      <h1>Task Prioritization Tool</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          placeholder="Enter priority (1-5)"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {sortedTasks.map((item, index) => (
            <li key={index}>
              <span>{item.task}</span> - <span>Priority: {item.priority}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
