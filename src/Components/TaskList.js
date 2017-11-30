import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.description}</li>)}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      duedate: PropTypes.string
    }).isRequired
  ).isRequired
};

export default TaskList;
