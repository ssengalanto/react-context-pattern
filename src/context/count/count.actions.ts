export enum CountActionTypes {
  COUNT_INCREMENT = '@@count/COUNT_INCREMENT',
  COUNT_DECREMENT = '@@count/COUNT_DECREMENT',
}

export type CountActions = IncrementCount | DecrementCount;

interface IncrementCount {
  type: CountActionTypes.COUNT_INCREMENT;
}

interface DecrementCount {
  type: CountActionTypes.COUNT_DECREMENT;
}

export const incrementCount = (): IncrementCount => ({
  type: CountActionTypes.COUNT_INCREMENT,
});

export const decrementCount = (): DecrementCount => ({
  type: CountActionTypes.COUNT_DECREMENT,
});
