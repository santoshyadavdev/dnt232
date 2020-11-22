import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { TodosDetailsComponent } from './todos-details/todos-details.component';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    PhotosComponent,
    TodosAddComponent,
    TodosDetailsComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }
