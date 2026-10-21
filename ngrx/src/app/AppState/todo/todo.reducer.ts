import { createReducer, on } from '@ngrx/store';
import { ITodo } from '../store';
import { loadingTodo, loadTodoSucess } from './todo.action';

export const intialState: Array<ITodo> = [];

export const todoReducer = createReducer(
  intialState,
  on(loadingTodo, (state) => {
    return state;
  }),
  on(loadTodoSucess, (state, action) => {
    return [...state, ...action.todos];
  }),
);
