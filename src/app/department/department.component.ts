import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { EmployeeService } from '../employee/services/employee.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'dnt-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  title$ = this.route.data.pipe(
    map(data => data.title)
  );
  constructor(@SkipSelf() private empService: EmployeeService,
              private route: ActivatedRoute,
              @Optional() private loggerService: LoggerService) { }

  ngOnInit(): void {

    if (this.loggerService) {
      this.loggerService.log();
    }
  }

  addEmp() {
    const emp = {
      id: 4,
      name: 'Anil',
      age: 26,
      dob: new Date('10-Feb-2000'),
      email: 'test3@gmail.com',
      salary: 450000
    };
    this.empService.addEmployee(emp);
    console.log(this.empService.empList);
  }

}
