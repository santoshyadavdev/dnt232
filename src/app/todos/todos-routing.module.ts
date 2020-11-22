import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { TodoresolveGuard } from './guard/todoresolve.guard';
import { TodosDetailsComponent } from './todos-details/todos-details.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '', component: TodosComponent, canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: {
      todos: TodoresolveGuard
    },
    children: [
      { path: ':id', component: TodosDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
