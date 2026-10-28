import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApp } from './todo-app';

describe('TodoApp', () => {
  let component: TodoApp;
  let fixture: ComponentFixture<TodoApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
