import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../AppState/store';
import { Observable } from 'rxjs';
import { loadingTodo } from '../AppState/todo/todo.action';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-crud',
  styleUrl: './crud.css',
  templateUrl: './crud.html',
})
export class Crud implements OnInit {
  todoData$: Observable<ITodo[]>;
  constructor(private store: Store<{ todos: ITodo[] }>) {
    this.todoData$ = this.store.select('todos');
  }
  ngOnInit(): void {
    this.store.dispatch(loadingTodo());
  }
}
