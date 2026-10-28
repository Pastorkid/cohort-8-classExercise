import { DatePipe, JsonPipe, NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoService } from '../Services/todo-service';
import { Task } from './interface/createTodo';

const ALLOWED_TAGS = new Set(['Health', 'Fitness', 'Default']);

@Component({
  selector: 'app-todo-app',
  imports: [NgClass, FormsModule, DatePipe],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp implements OnInit {
  constructor(
    private todoService: TodoService,
    private snackBar: MatSnackBar,
  ) {}

  taskName = '';
  dueDate = '';
  tagsRaw = '';

  tasks = signal<Task[]>([]);
  isCreating = false;

  private showError(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      panelClass: ['snackbar-error'],
    });
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'OK', {
      panelClass: ['snackbar-success'],
    });
  }

  loadTasks() {
    this.todoService.getAllTasks().subscribe({
      next: (data) => {
        console.log(data);

        this.tasks.set(data);
      },
      error: (err) => {
        this.showError(`Failed to load tasks`);
      },
    });
  }

  private validateInputs(): string | null {
    const trimmedName = this.taskName.trim();
    const trimmedTagsRaw = this.tagsRaw.trim();
    if (!trimmedName) return 'Task name is required.';
    if (trimmedName.length < 2) return 'Task name must be at least 2 characters.';
    if (trimmedName.length > 200) return 'Task name cannot exceed 200 characters.';

    if (!this.dueDate) return 'Due date is required.';

    if (!trimmedTagsRaw) return 'At least one tag is required. Allowed: Health, Fitness, Default.';
    const invalid = trimmedTagsRaw.split(',').filter((t) => !ALLOWED_TAGS.has(t));
    if (invalid.length > 0) {
      return `Invalid tag(s): ${invalid.join(', ')}. Allowed: Health, Fitness, Default (case-insensitive).`;
    }

    return null;
  }

  addTask(): void {
    const validationError = this.validateInputs();
    if (validationError) {
      this.showError(validationError);
      return;
    }

    const tags = this.tagsRaw.split(',');
    const dueDateIso = new Date(this.dueDate).toISOString();
    const submittedName = this.taskName.trim();

    this.isCreating = true;
    this.todoService
      .createTask({
        taskName: submittedName,
        dueDate: dueDateIso,
        tags,
      })
      .subscribe({
        next: (res) => {
          const newTask: Task = {
            id: res.taskId,
            taskName: submittedName,
            dueDate: dueDateIso,
            tags,
          };
          this.tasks.update((tasks) => [...tasks, newTask]);

          this.showSuccess(res.msg ?? 'Task created successfully.');
        },
        error: (err) => {
          this.showError(`Failed to create task`);
        },
        complete: () => {
          this.isCreating = false;
          this.taskName = '';
          this.dueDate = '';
          this.tagsRaw = '';
        },
      });
  }

  removeTask(id: number): void {
    this.todoService.deleteTask(id).subscribe({
      next: () => {
        this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
        this.showSuccess('Task deleted successfully.');
      },
      error: (err) => {
        this.showError(`Failed to delete task`);
      },
      complete: () => {},
    });
  }
  ngOnInit(): void {
    this.loadTasks();
  }
}
