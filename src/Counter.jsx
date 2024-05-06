import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // const [count, setCount] = useState(() => {
  //   const savedCount = localStorage.getItem('count');
  //   return savedCount !== null ? parseInt(savedCount, 10) : 0;
  // });

  // useEffect(() => {
  //   localStorage.setItem('count', count);
  // }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1); 
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1); 
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter</h1> 
      <p style={{ fontSize: '2em' }}>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
