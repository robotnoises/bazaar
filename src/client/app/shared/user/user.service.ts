import { Injectable } from '@angular/core';

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

  static isAuthenticated(): boolean {
    return (window.localStorage.getItem('bazaar-auth') === 'true');
  }

  static isRole(role: string): void {
    // todo
  }
}