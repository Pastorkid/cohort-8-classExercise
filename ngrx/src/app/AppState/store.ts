export interface Employer {
  id: number;
  name: string;
  userName: string;
  email: string;
}

export interface Icounter {
  counter: number;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
