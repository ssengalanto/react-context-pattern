import React from 'react';
import { useCount, incrementCount, decrementCount } from 'context';

import { S } from './count.styles';

export const Counter: React.FC = () => {
  const [{ count }, dispatch] = useCount();

  return (
    <S.Container>
      <S.IncrementButton onClick={() => dispatch(incrementCount())}>
        +
      </S.IncrementButton>
      <S.Count>{count}</S.Count>
      <S.DecrementButton onClick={() => dispatch(decrementCount())}>
        -
      </S.DecrementButton>
    </S.Container>
  );
};
