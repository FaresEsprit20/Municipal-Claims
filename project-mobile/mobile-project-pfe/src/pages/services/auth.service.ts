import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
export class AuthService {

  isAuth = false;







  signIn() {
    this.isAuth = true;

  }

  signOut() {

    this.isAuth = false;

  }

  authenticated() : boolean {
    return this.isAuth;
  }

}
