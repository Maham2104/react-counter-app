import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Counter state
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState('light'); // Dark/Light mode

  useEffect(() => {
    setHistory(prev => [count, ...prev]);
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={`app-container ${theme}`}>
      <h1>React Counter App</h1>
      <button className="btn theme-toggle" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        history={history}
      />
    </div>
  );
}

export default App;
