import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../services/todo';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoresolveGuard implements Resolve<Observable<Todo[]>>  {
  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    return this.todoService.getTodos();
  }
}
