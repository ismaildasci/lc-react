import React, { useContext, useMemo } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoItemsRemaining() {
  const { todos } = useContext(TodosContext);

  function remainingCalculation() {
    // console.log('calculating remaining todos. This is slow.');
    // for (let index = 0; index < 2000000000; index++) {}
    return todos.filter(todo => !todo.isComplete).length;
  }

  const remaining = useMemo(remainingCalculation, [todos]);

  return <span>{remaining} items remaining</span>;
}

export default TodoItemsRemaining;
