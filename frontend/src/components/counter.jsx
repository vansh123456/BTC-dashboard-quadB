import React, { useState, useEffect } from 'react';

export const CountdownCircle = () => {
  const [count, setCount] = useState(60);

  // useEffect to handle the countdown logic
  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup on unmount or re-render
    }
  }, [count]);

  return (
    <div className="flex">
      <div className="relative   flex items-center justify-center rounded-full border-2 border-teal">
        <span className="text-2xl font-thin text-teal">{count}</span>
      </div>
    </div>
  );
};

export default CountdownCircle;
