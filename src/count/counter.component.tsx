import React from 'react';
import { useCount, incrementCount, decrementCount } from 'context';

export const Counter: React.FC = () => {
  const [{ count }, dispatch] = useCount();

  return (
    <>
      <div>{`The current count is ${count}`}</div>
      <button onClick={() => dispatch(incrementCount())}>+</button>
      <button onClick={() => dispatch(decrementCount())}>-</button>
    </>
  );
};
