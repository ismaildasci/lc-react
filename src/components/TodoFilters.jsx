import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoFilters() {
  const { filter, setFilter, todosFiltered } = useContext(TodosContext);

  return (
    <div>
      <button
        onClick={() => {
          setFilter('all');
          todosFiltered();
        }}
        className={`button filter-button ${
          filter === 'all' ? 'filter-button-active' : ''
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter('active');
          todosFiltered();
        }}
        className={`button filter-button ${
          filter === 'active' ? 'filter-button-active' : ''
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter('completed');
          todosFiltered();
        }}
        className={`button filter-button ${
          filter === 'completed' ? 'filter-button-active' : ''
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
