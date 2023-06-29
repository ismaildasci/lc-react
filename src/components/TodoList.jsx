import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import TodoCompleteAllTodos from './TodoCompleteAllTodos';
import TodoFilters from './TodoFilters';

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  todosFiltered: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  remaining: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
};

function TodoList(props) {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <ul className="todo-list">
        {props.todosFiltered(filter).map((todo, index) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                onChange={() => props.completeTodo(todo.id)}
                checked={todo.isComplete ? true : false}
              />

              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => props.markAsEditing(todo.id)}
                  className={`todo-item-label ${
                    todo.isComplete ? 'line-through' : ''
                  }`}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={event => props.updateTodo(event, todo.id)}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      props.updateTodo(event, todo.id);
                    } else if (event.key === 'Escape') {
                      props.cancelEdit(event, todo.id);
                    }
                  }}
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                />
              )}
            </div>
            <button
              onClick={() => props.deleteTodo(todo.id)}
              className="x-button"
            >
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="check-all-container">
        <TodoCompleteAllTodos completeAllTodos={props.completeAllTodos} />

        <TodoItemsRemaining remaining={props.remaining} />
      </div>

      <div className="other-buttons-container">
        <TodoFilters
          todosFiltered={props.todosFiltered}
          filter={filter}
          setFilter={setFilter}
        />
        <div>
          <TodoClearCompleted clearCompleted={props.clearCompleted} />
        </div>
      </div>
    </>
  );
}

export default TodoList;
