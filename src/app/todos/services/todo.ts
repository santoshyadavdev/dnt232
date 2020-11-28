export interface Todo {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}


export interface TodoResponse {
  data: Todo;
  errror: string;
}
