import React from 'react';
import PropTypes from 'prop-types';

TodoClearCompleted.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
};

function TodoClearCompleted(props) {
  return (
    <button onClick={props.clearCompleted} className="button">
      Clear completed
    </button>
  );
}

export default TodoClearCompleted;
