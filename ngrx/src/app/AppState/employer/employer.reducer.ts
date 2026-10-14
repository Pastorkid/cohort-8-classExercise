import { createReducer } from '@ngrx/store';
import { Employer } from '../store';

export const intialState: Array<Employer> = [
  {
    id: 1,
    name: 'employer1',
    userName: 'employer1',
    email: 'employer1@example.com',
  },
  {
    id: 2,
    name: 'employer2',
    userName: 'employer2',
    email: 'employer2@example.com',
  },
];

export const empReducer = createReducer(intialState);
