import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';
import ListItem from './ListItem';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => <ListItem key={task.id} task={task} />)}
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
