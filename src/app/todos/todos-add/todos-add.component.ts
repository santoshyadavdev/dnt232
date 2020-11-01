import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../services/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'dnt-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  todo: Todo = {
    userId: 0,
    completed: false,
    title: '',
    id: 0
  };

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.todo = {
    //   completed: true,
    //   title: 'test title',
    //   userId: 1,
    //   id: 1
    // };
  }

  addTodo(todoForm: NgForm) {
    if (this.todo.id >= 1) {
      this.todoService.updateTodo(this.todo).subscribe(res => console.log(res));
    }
    else {
      this.todoService.addTodos(this.todo).subscribe(res => {
        console.log(res);
        todoForm.resetForm({
          completed: true,
          title: '',
          userId: 1
        })
      });
    }

  }



}
