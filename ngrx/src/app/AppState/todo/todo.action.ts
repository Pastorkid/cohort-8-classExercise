import { createAction, props } from '@ngrx/store';
import { ITodo } from '../store';

export const loadingTodo = createAction('loading todo');
export const loadTodoSucess = createAction('load todo success', props<{ todos: ITodo[] }>());
