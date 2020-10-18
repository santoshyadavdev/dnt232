import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'dnt-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  @Input() isWeb: boolean = false;

  @Input() empList: Employee[];
  constructor() { }

  ngOnInit(): void {
  }

}
