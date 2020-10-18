import { Component } from '@angular/core';
import { Employee } from './employee/employee';

@Component({
  selector: 'dnt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnt232';

  role = 'Admin';

  isWeb = false;

  data: Employee[] = [
    {
      id: 1,
      name: 'Dinesh',
      age: 24,
      dob: new Date('10-Jan-2000'),
      email: 'test@gmail.com',
      salary: 450000
    },
    {
      id: 2,
      name: 'Ravi',
      age: 25,
      dob: new Date('10-Nov-2000'),
      email: 'test2@gmail.com',
      salary: 450000
    },
    {
      id: 3,
      name: 'Mahendiran',
      age: 26,
      dob: new Date('10-Feb-2000'),
      email: 'test3@gmail.com',
      salary: 450000
    }
  ];
}
