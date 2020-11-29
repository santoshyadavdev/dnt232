import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empList: Employee[] = [
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

  constructor(private http: HttpClient) {
    console.log('New Employee Servive is created');
  }

  getEmployeeData() {
    return this.empList;
  }

  addEmployee(emp: Employee) {
    this.empList.push(emp);
  }

  postEmployee(emp: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', emp);
  }

  getEmployee() {
    return {
      name: 'Test',
      dob: '13-Jan-2000',
      password: '123',
      confirmPassword: '',
      tnc: true,
      email: 'dsas@df.com',
      address: {
        addr1: 'dfsdf',
        addr2: 'dsgfd',
        city: 'fdg',
        pin: '1321',
      },
      pastExp: [{
        employer: 'ds',
        designation: 'test',
      }]
    };
  }
}
