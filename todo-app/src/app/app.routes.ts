import { Routes } from '@angular/router';
import { TodoApp } from './todo-app/todo-app';

export const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },

  { path: '', component: TodoApp },
];
