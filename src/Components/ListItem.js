import React from 'react';
import PropTypes from 'prop-types';
import ListItemWrapper from './style/ListItemWrapper';

const ListItem = ({ task }) => {
  return (
    <ListItemWrapper>
      <span><input className="completed" type="checkbox" /></span>
      <span className="description">{task.description}</span>
      <span className="duedate">{task.duedate}</span>
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    duedate: PropTypes.string.isRequired
  })
};

export default ListItem;
