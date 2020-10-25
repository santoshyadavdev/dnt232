import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'dnt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) empComponent : EmployeeComponent;

  @ContentChildren(EmployeeComponent) empChildren : QueryList<EmployeeComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
   console.log(this.empComponent);
   console.log(this.empChildren);
  }


}
