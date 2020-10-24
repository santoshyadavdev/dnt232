import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'dnt-employee',
  templateUrl: './employee.component.html',
  // template: `<h1>This is employee
  //  Component</h1>`,
  styleUrls: ['./employee.component.css'],
  // styles: ['h1 { color: red }']
})
export class EmployeeComponent implements OnInit {

  employeeName = 'Krishna';

  department = 'Tech';

  hide = false;

  render = true;

  employee: Employee = {
    id: 1,
    name: 'Dinesh',
    age: 24,
    dob: new Date('10-Jan-2000'),
    email: 'test@gmail.com',
    salary: 450000
  }

  empList : Employee[] ;

  isWeb = true;

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
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hide = !this.hide;
  }

  removeTable() {
    this.render = !this.render;
  }

  trackByFn(i: number, employee: Employee) {
    console.log(employee, i);
    return employee.id;
  }

  getData(){
    this.empList = [
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

  getNewData() {
    this.empList = [
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
      },
      {
        id: 4,
        name: 'Anil',
        age: 26,
        dob: new Date('10-Feb-2000'),
        email: 'test3@gmail.com',
        salary: 450000
      }
    ];
  }
}
