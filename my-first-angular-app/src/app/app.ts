import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstResusableComponet } from './my-first-resusable-componet/my-first-resusable-componet';
import { PipeEx } from './pipe-ex/pipe-ex';
import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  NgFor,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { CustomPipePipe } from './pipes/custom-pipe-pipe';
import { PostService } from './Services/post-service';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { Post } from './interface/post';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MyFirstResusableComponet,
    PipeEx,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    JsonPipe,
    DatePipe,
    CustomPipePipe,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  constructor(private postService: PostService) {}
  isLoading = false;
  posts = signal<Post[]>([]);
  loadPosts() {
    this.isLoading = true;
    // console.log(this.postService.getPosts());

    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.isLoading = false;
        console.log('complete');
      },
    });
  }
  addPost() {
    const newPost = {
      title: 'New Post',
      body: 'New post Body',
      userId: 1,
    };
    this.postService.createPost(newPost);
  }
  title = 'A NEW ANGULAR APPLICATION';
  title2 = 'My First Resusable Componet';
  myList = ['Item 1', 'Item 2', 'Item 3'];
  isLoggedIn = false;
  LoggedIn = false;

  price: number = 100;
  student: any = {
    name: 'Miracle Tijani',
    email: 'miracle.tijani@example.com',
    age: 20,
    address: {
      city: 'ife',
      state: 'osun',
    },
  };
  currentDate: Date = new Date();

  Getprogress() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
  SaveProgress() {
    localStorage.setItem('isLoggedIn', this.isLoggedIn.toString());
  }
  isComplete = false;
  ngOnInit(): void {
    console.log(this.title2);
    console.log(this.myList);
    console.log(this.isLoggedIn);
    this.SaveProgress();
    this.loadPosts();
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
    if (this.isComplete) {
      this.SaveProgress();
    }
  }

  myData = [
    { id: 1, name: 'jdhhf', age: 20 },
    { id: 2, name: 'jdhfjfjjfhf', age: 21 },
  ];
}
