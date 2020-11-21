import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  jwtHeader = new HttpHeaders().set('jwttoken', 'fghfdjkghkkjf4564654');
  constructor(private http: HttpClient) { }

  // fetchTodo() {
  //   return fetch('https://jsonplaceholder.typicode.com/albums');
  // }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/', {
      //headers: this.jwtHeader,
      params: {
        'userId': '1'
      }
    });
  }

  addTodos(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo,
      // {
      //   headers: this.jwtHeader
      // }
    );
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo, { headers: this.jwtHeader });
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

  getTodoDetails(id: number) {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,);
  }

}
