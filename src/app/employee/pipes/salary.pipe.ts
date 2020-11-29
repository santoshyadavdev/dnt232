import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';

@Pipe({
  name: 'salaryFilter'
})
export class SalaryPipe implements PipeTransform {

  transform(employees: Employee[], salary: number): Employee[] {
    return employees.filter(emp => emp.salary > salary);
  }

}
