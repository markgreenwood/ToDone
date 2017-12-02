import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import TaskListWrapper from './style/TaskListWrapper';

const TaskList = ({ tasks }) => {
  return <TaskListWrapper>{tasks.map(task => <ListItem key={task.id} task={task} />)}</TaskListWrapper>;
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
