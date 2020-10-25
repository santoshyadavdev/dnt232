import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empList: Employee[] = [];

  constructor() { }

  getEmployeeData() {
   return this.empList = [
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
}
