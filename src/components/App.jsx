import { useState } from 'react';
import '../reset.css';
import '../App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
    },
    {
      id: 2,
      title: 'go Grocery',
      isComplete: true,
    },
    {
      id: 1,
      title: 'Take over world',
      isComplete: false,
    },
  ]);
}

export default App;
