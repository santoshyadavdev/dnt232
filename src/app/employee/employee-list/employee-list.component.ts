import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'dnt-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class EmployeeListComponent implements OnInit {

  @Input() isWeb: boolean = false;

  @Output() selectedEmployee = new EventEmitter<Employee>();

  @Input() empList: Employee[];
  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(emp: Employee) {
    // send to parent
    console.log(emp);
    this.selectedEmployee.emit(emp);
  }

}
