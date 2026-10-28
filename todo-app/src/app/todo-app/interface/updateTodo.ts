export interface UpdateTodo {
  taskName?: string;
  dueDate?: string;
  tags?: string[];
}

export interface UpdateTodoResponse extends UpdateTodo {
  id: number;
}