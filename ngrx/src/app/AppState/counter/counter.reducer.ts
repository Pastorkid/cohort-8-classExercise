import { createReducer, on } from '@ngrx/store';
import { addCounter, decrement, increment, reset } from './counter.action';

export const intialState = 0;

export const counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    return state - 1;
  }),
  on(reset, () => {
    return intialState;
  }),
  on(addCounter, (state, action) => {
    return state + action.counter;
  }),
);
