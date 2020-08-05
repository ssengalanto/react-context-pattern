import produce, { Draft } from 'immer';

import { CountActionTypes, CountActions } from './count.actions';

export interface CountState {
  count: number;
}

export const initialCountState: CountState = {
  count: 0,
};

export const countReducer = (
  state: CountState = initialCountState,
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
