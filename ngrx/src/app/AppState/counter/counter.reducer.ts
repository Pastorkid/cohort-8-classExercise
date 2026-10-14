import { createReducer } from '@ngrx/store';

export const intialState = 0;

export const counterReducer = createReducer(intialState);
