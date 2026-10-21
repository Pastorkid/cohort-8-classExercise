import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { ITodo } from '../AppState/store';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  private apiUrl = `https://jsonplaceholder.typicode.com`;

  getTodos() {
    return this.http.get<ITodo[]>(`${this.apiUrl}/posts?_limit=5`);
  }
}
