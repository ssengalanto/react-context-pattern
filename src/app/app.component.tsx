import React from 'react';

import { Counter } from 'count';
import { CountProvider } from 'context';

export const App: React.FC = () => (
  <CountProvider>
    <Counter />
  </CountProvider>
);
