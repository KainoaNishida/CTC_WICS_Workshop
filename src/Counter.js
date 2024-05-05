import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '20px' }}>
      <h1>Counter</h1>
      <p style={{ fontSize: '2em' }}>{count}</p>
      <button style={{ fontSize: '1em', padding: '10px 20px', margin: '5px' }} onClick={increment}>Increase</button>
      <button style={{ fontSize: '1em', padding: '10px 20px', margin: '5px' }} onClick={decrement}>Decrease</button>
      <button style={{ fontSize: '1em', padding: '10px 20px', margin: '5px' }} onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
