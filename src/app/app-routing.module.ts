import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeGuard } from './employee/guards/employee.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employee/onboarding', component: EmployeeOnboardingComponent, canDeactivate: [EmployeeGuard] },
  { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
  { path: 'todo', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  // {
  //   path: 'todo', component: TodosComponent, canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   children: [
  //     { path: ':id', component: TodosDetailsComponent },
  //   ]
  // },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
