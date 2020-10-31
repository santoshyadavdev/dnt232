import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addTodos(todo: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET',
      'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true
    });

    // const requests = new HttpRequest('POST',
    //   'https://jsonplaceholder.typicode.com/photos', todo, {
    //   reportProgress: true
    // });
    return this.http.request(request);
  }

}
