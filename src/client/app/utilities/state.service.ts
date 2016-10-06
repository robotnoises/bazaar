import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

/**
 * Handles the parsing of Stringified input
 */

function parseStringified(input: any) {
  try {
    let obj = JSON.parse(input);
    if (obj && typeof obj === 'object') {
      return obj;
    } else {
      if (input === 'true') return true;
      if (input === 'false') return false;
      if (!isNaN(input)) return parseInt(input, 10);
      throw new Error('Cannot parse ' + input);
    }
  } catch (ex) {
    if (input) {
      return input;
    } else {
      throw new Error('Cannot parseStringified(): ' + ex);
    }
  }
}

/**
 * Checks to see if it's already a string. If not, it stringifies it.
 */

function stringify(input: any) {
  if (input && typeof input === 'string') {
    return input;
  } else if (input) {
    return JSON.stringify(input);
  } else {
    throw new Error('Cannot stringify(): Input is undefined.');
  }
}

const BAZAAR_LS_PREFIX = '$bazaar:';

// todo, load this from localStorage
let ObservedData = {};

@Injectable()
export class StateService {
  
  private static observe(key: string, value?: any): Observable<any> {
    
    let prefixedKey = BAZAAR_LS_PREFIX + key;
    let observeableSource$ = new Subject<string>();
    let observed$ = observeableSource$.asObservable();

    if (value) {
      // Stringify the input
      let stringValue = stringify(value);
      
      // Persist via localStorage
      window.localStorage.setItem(prefixedKey, stringValue);

      // publish changes
      observeableSource$.next(value);
    }
    
    return observed$;
  }
  
  // Optionally add user data and observe changes
  static user(user?: any): Observable<any> {
    const userKey = 'user';
    return this.observe(userKey, user); 
  }

  // Optionally add auth state and observe changes
  static auth(state?: boolean): Observable<any> {
    const authKey = 'auth';
    return this.observe(authKey, state || false); 
  }
}