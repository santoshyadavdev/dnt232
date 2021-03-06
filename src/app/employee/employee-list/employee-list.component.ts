import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'dnt-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input() isWeb = false;

  @Output() selectedEmployee = new EventEmitter<Employee>();

  @Input() empList: Employee[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  salary : FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.salary = this.fb.control('');
  }

  sendToParent(emp: Employee) {
    // send to parent
    console.log(emp);
    this.selectedEmployee.emit(emp);
  }

}
