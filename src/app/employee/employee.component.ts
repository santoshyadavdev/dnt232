import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
