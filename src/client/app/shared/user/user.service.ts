import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  static setUser(user: any): void {
    try {
      window.localStorage.setItem('bazaar-user', JSON.stringify(user));
      window.localStorage.setItem('bazaar-auth', 'true');
    } catch (ex) {
      console.error(ex);
    }
  }

  static getUser(): any {
    try {
      return JSON.parse(window.localStorage.getItem('bazaar-user'));
    } catch (ex) {
      console.error(ex);
    }
  }

  static removeUser(): void {
    window.localStorage.setItem('bazaar-auth', 'false');
    window.localStorage.setItem('bazaar-user', '{}');
  }

  static isAuthenticated(): void { // Observable<any> {
    // return Observable.create(observer => {
    //   observer.next(window.localStorage.getItem('bazaar-auth') === 'true');
    //   observer.complete();
    // });
  }

  static isRole(role: string): void {
    // todo
  }
}