import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { EmployeeComponent } from './employee/employee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/onboarding', component: EmployeeOnboardingComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'todo', component: TodosComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
