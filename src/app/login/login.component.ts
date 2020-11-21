import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'dnt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userName: '',
    password: ''
  };

  constructor(private router: Router,
    private loginService: LoginService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login() {
    // this.router.config.push()
    if (this.loginService.login(this.user.userName, this.user.password)) {
      // redirect
      this.route.queryParamMap.subscribe((res) => {
        if (res.has('loginUrl')) {
          this.router.navigate([res.get('loginUrl')]);
        } else {
          this.router.navigate(['/employee']);
        }
      });

      // this.router.navigateByUrl('employee');
    }
  }

}
