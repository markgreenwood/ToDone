import React from 'react';
import PropTypes from 'prop-types';
import ListItemWrapper from './style/ListItemWrapper';
import moment from 'moment';

const ListItem = ({ task }) => {
  return (
    <ListItemWrapper>
      <span><input className="completed" type="checkbox" /></span>
      <span className="description">{task.description}</span>
      <span className="duedate">{moment(task.duedate).format('l')}</span>
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
