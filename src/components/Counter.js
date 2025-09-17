import React, { useEffect, useState } from 'react';

function Counter({ count, increment, decrement, reset, history }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 200);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="counter-container">
      <h2 className={`counter-value ${animate ? 'animate' : ''}`}>{count}</h2>
      <div className="button-group">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
      <div className="history-container">
        <h3>History:</h3>
        <div className="history-list">
          {history.map((val, index) => (
            <span key={index} className="history-item">{val}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;
