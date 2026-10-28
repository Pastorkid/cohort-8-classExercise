import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CreateTodo, Task } from '../todo-app/interface/createTodo';
import { DeleteTodoResponse } from '../todo-app/interface/deleteTodo';
import { UpdateTodo, UpdateTodoResponse } from '../todo-app/interface/updateTodo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}
  private readonly API_BASE_URL = `${environment.API_BASE_URL}/api/task`;

  createTask(todo: CreateTodo): Observable<{ taskId: number; msg: string; success: boolean }> {
    return this.httpClient.post<{ taskId: number; msg: string; success: boolean }>(
      `${this.API_BASE_URL}/create`,
      todo,
    );
  }

  getAllTasks() {
    return this.httpClient.get<Task[]>(`${this.API_BASE_URL}/all-tasks`);
  }

  deleteTask(id: number): Observable<DeleteTodoResponse> {
    return this.httpClient.delete<DeleteTodoResponse>(
      `${this.API_BASE_URL}/delete-single-task/${id}`,
    );
  }

  updateTask(id: number, payload: UpdateTodo): Observable<UpdateTodoResponse> {
    return this.httpClient.put<UpdateTodoResponse>(
      `${this.API_BASE_URL}/update-single-task/${id}`,
      payload,
    );
  }
}
