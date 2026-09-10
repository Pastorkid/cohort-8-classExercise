import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  private apiUrl = `https://jsonplaceholder.typicode.com`;
  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?_limit=5`);
  }

  createPost(post: Omit<Post, 'id'>) {
    return this.http.post<Post>(`${this.apiUrl}`, post);
  }
}
