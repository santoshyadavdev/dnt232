import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Employee } from './employee/employee';

@Component({
  selector: 'dnt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dnt232';

  role = 'Admin';

  isWeb = false;

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

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        console.log('Rouet Navigation started');
      }
      if (evt instanceof NavigationEnd) {
        console.log('Rouet Navigation Ended');
      }
    }

    );
  }
}


// canActivate
// canAcivateChild -- Children
// canDeactivate --
// canLoad -- LazyLoading
// Resolve --
