import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../../service/todo-service';
import * as TodoActions from './todo.action';
import { map, mergeMap } from 'rxjs';
import { ITodo } from '../store';

@Injectable()
export class todoEffects {
  action$ = inject(Actions);
  constructor(private todoService: TodoService) {}

  loadingTodos = createEffect(() => {
    return this.action$.pipe(
      ofType(TodoActions.loadingTodo),
      mergeMap(() => {
        return this.todoService.getTodos().pipe(
          map((todo: ITodo[]) => {
            return TodoActions.loadTodoSucess({ todos: todo });
          }),
        );
      }),
    );
  });
}
