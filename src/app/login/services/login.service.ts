import { Injectable } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  isAdmin = false;

  constructor() { }

  login(userName: string, password: string) {
    if (userName === 'Admin' && password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (userName === 'User' && password === 'User') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
