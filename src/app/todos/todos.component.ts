import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Todo } from './services/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'dnt-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  todoList: Todo[];
  error$: any;

  // todo$: Observable<Todo[]>;

  todo$ = this.todoService.getTodos().pipe(
    catchError((err) => this.error$ = of(err.message))
  );

  todoSubscription: Subscription;

  constructor(private todoService: TodoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.data.subscribe((data) => this.todoList = data.todos);
    // this.todoService.fetchTodo().then(res=> console.log(res));
    // this.todoSubscription = this.todoService.getTodos().subscribe((res) => this.todoList = res);
    // this.todo$ = this.todoService.getTodos();

  }

  updateTask() {
    const todo: Todo = {
      userId: 1,
      id: 1,
      completed: true,
      title: 'Test Task'
    };
    this.todoService.updateTodo(todo).subscribe(res => console.log(res));
  }

  deleteTask() {
    const todo: Todo = {
      userId: 1,
      id: 1,
      completed: true,
      title: 'Test Task'
    };
    this.todoService.deleteTodo(todo).subscribe(res => console.log(res));
  }

  ngOnDestroy() {
  }

}


// GET
// POST
// PUT
// PATCH
// DELETE
// JSONP
// OPTIONS
