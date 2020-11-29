import { AfterContentInit, Component, ContentChild, ContentChildren, Host, OnInit, QueryList } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from '../employee/services/employee.service';

@Component({
  selector: 'dnt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [EmployeeService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) empComponent: EmployeeComponent;

  @ContentChildren(EmployeeComponent) empChildren: QueryList<EmployeeComponent>;

  constructor(@Host() private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
   console.log(this.empComponent);
   console.log(this.empChildren);
  }


}
