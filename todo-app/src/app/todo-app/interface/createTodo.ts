export interface CreateTodo {
  taskName: string;
  dueDate: string;
  tags: string[];
}

export interface Task extends CreateTodo {
  id: number;
}
