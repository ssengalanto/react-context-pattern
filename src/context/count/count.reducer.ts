import produce, { Draft } from 'immer';

import { CountActionTypes, CountActions } from './count.actions';

export interface CountState {
  count: number;
}

export const countState: CountState = {
  count: 0,
};

export const countReducer = (
  state: CountState = countState,
  action: CountActions
): CountState =>
  produce(state, (draft: Draft<CountState>) => {
    switch (action.type) {
      case CountActionTypes.COUNT_INCREMENT:
        draft.count += 1;
        break;

      case CountActionTypes.COUNT_DECREMENT:
        draft.count -= 1;
        break;
    }
  });
