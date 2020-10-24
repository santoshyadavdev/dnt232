import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee } from './employee';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'dnt-employee',
  templateUrl: './employee.component.html',
  // template: `<h1>This is employee
  //  Component</h1>`,
  styleUrls: ['./employee.component.css'],
  // styles: ['h1 { color: red }']
})
export class EmployeeComponent implements OnInit, DoCheck {

  @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;

  @ViewChild('errorDiv', { static: true }) errorDiv: ElementRef;

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
  };

  empList: Employee[];

  isWeb: boolean;

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

  selectedEmployee: Employee;
  constructor() {
    this.isWeb = true;
  }

  ngOnInit(): void {
    this.header.title = 'This is employee Component';

    console.log(this.errorDiv);
    this.errorDiv.nativeElement.innerHTML = '<h1>This is error div</h1>';
  }

  ngDoCheck(): void {
    console.log('Do check is called');
  }

  addEmployee() {
    const emp  = {
      id: 4,
      name: 'Anil',
      age: 26,
      dob: new Date('10-Feb-2000'),
      email: 'test3@gmail.com',
      salary: 450000
    };

    this.data = [...this.data, emp ];
    this.isWeb = false;

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

  getSelectedEmployee(emp: Employee) {
    this.employee = emp;
  }

  getData() {
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
