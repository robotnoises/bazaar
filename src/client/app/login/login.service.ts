import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Login } from './index';
import { Config } from './../shared/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  
  constructor(private http: Http) { }

  login(loginForm: Login) {
    return this.http.post(`${Config.API}/auth/login`, loginForm)
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}