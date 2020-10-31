import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../services/todo';

@Component({
  selector: 'dnt-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  constructor() { }

  ngOnInit(): void {
  }

}
