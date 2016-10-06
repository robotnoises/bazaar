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

let subscriptions = {};
let subscriptionsInitialized = false;

// function initializeSubscriptions() {
//   let localStorageData = window.localStorage;
//   for (var key in localStorageData) {
//     if (key.indexOf(BAZAAR_LS_PREFIX) === 0) {
//       subscriptions[key] = localStorageData[key];
//     }
//   }
//   subscriptionsInitialized = true;
//   console.log(subscriptions);
// }

// initializeSubscriptions();

const userKey = 'user';
const authKey = 'auth';

@Injectable()
export class StateService {

  private static localStorageGet(key: string) {
    let prefixedKey = BAZAAR_LS_PREFIX + key;
    return parseStringified(window.localStorage.getItem(prefixedKey));
  }

  private static localStorageSet(key: string, value: any) {
    let prefixedKey = BAZAAR_LS_PREFIX + key;
    window.localStorage.setItem(prefixedKey, stringify(value));
  }

  private static observe(key: string): Observable<any> {
    let prefixedKey = BAZAAR_LS_PREFIX + key;
    
    // Track our observables
    subscriptions[prefixedKey] = subscriptions[prefixedKey] || new Subject<string>();

    // Check to see if there is any persisted data in localStorage for this key
    let loadedFromStorage = this.localStorageGet(key);
    
    if (loadedFromStorage) {
      this.change(key, loadedFromStorage);
    }

    // return observable
    return subscriptions[prefixedKey].asObservable();
  }

  private static change(key: string, value: any): void {
    let prefixedKey = BAZAAR_LS_PREFIX + key;
    let sub$ = subscriptions[prefixedKey];

    this.localStorageSet(key, value);
    
    if (sub$) {
      setTimeout(() => {
        sub$.next(value);
      }, 1); // todo: might be bad
    }
  }
  
  // Observe User data changes
  static user(): Observable<any> {
    return this.observe(userKey); 
  }

  // Change User data
  static userChange(user: any): void {
    this.change(userKey, user)
  }

  // Observe auth state changes
  static auth(): Observable<any> {
    return this.observe(authKey); 
  }

  static authChange(state: boolean): void {
    this.change(authKey, state);
  }
}