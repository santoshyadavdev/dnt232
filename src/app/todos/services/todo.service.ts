import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Todo, TodoResponse } from './todo';

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
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todo/', {
      //headers: this.jwtHeader,
      params: {
        'userId': '1'
      }
    }).pipe(
      shareReplay(1)
    );
  }

  addTodos(todo: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo,
      // {
      //   headers: this.jwtHeader
      // }
    ).pipe(
      map((res) => this.handleResponse(res)),
      catchError(err => this.handleError(err))
    );
  }

  handleResponse(res: Todo) {
    let response: TodoResponse = {
      data: res,
      errror: ''
    }
    return response;
  }

  handleError(err: HttpErrorResponse) {
    let response: TodoResponse = {
      data: null,
      errror: err.message
    };
    return of(response);
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
