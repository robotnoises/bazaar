import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Login } from './index';
import { Config } from './../shared/index';
import { StateService } from './../utilities/index';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  
  constructor(private http: Http, private cookieSservice: CookieService) { }

  login(loginForm: Login) {
    return this.http.post(`${Config.API}/auth/login`, loginForm)
      .toPromise()
      .then((response) => {
        if (response && response.status === 200) {
          let resp = response.json();
          StateService.userChange(resp.body);
          StateService.authChange(true);
          return resp;
        } else {
          throw new Error('Not Authorized');
        }
      })
      .catch(error => {
        console.error(error)
      });
  }

  logout() {
    StateService.authChange(false);
    StateService.userChange({});
    
    return this.http.post(`${Config.API}/auth/logout`, {})
      .toPromise()
      .then((response) => {
        // todo: redirect
        this.cookieSservice.remove('connect.sid');
      })
      .catch(error => {
        console.error(error);
      });
  }
}