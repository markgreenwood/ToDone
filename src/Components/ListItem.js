import React from 'react';
import PropTypes from 'prop-types';
import ListItemWrapper from './style/ListItemWrapper';

const ListItem = ({ task }) => {
  return (
    <ListItemWrapper>
      <li>{task.description}</li>
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  task: PropTypes.objectOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
    })
  )
};

export default ListItem;
