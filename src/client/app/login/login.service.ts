import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Login } from './index';
import { Config, UserService } from './../shared/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  
  constructor(private http: Http) { }

  login(loginForm: Login) {
    return this.http.post(`${Config.API}/auth/login`, loginForm, { withCredentials: true })
      .toPromise()
      .then((response) => {
        if (response && response.status === 200) {
          let resp = response.json();
          UserService.setUser(resp.body);
          return resp;
        } else {
          throw new Error('Not Authorized');
        }
      })
      .catch(error => console.log(error));
  }
}