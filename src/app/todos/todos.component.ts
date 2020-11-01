import { Component, OnInit } from '@angular/core';
import { Todo } from './services/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'dnt-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    // this.todoService.fetchTodo().then(res=> console.log(res));
    this.todoService.getTodos().subscribe((res) => this.todoList = res);
  }

  updateTask() {
    const todo: Todo = {
      userId: 1,
      id:1,
      completed: true,
      title: 'Test Task'
    };
    this.todoService.updateTodo(todo).subscribe(res => console.log(res));
  }

  deleteTask() {
    const todo: Todo = {
      userId: 1,
      id:1,
      completed: true,
      title: 'Test Task'
    };
    this.todoService.deleteTodo(todo).subscribe(res => console.log(res));
  }

}


//GET
//POST
//PUT
//PATCH
//DELETE
//JSONP
//OPTIONS
