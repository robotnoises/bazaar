import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Config } from './../shared/index';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class MarketplaceService {

  listItems: Subject<Response>;

  constructor(private http: Http) { 
    this.listItems = new Subject<Response>();
  }

  init(): Observable<Response> {
    return this.listItems.asObservable();
  }

  list(page?: number): void {
    let pg = page || 1;    
    this.http.get(`${Config.API}/item?page=${pg}`)
      .toPromise()
      .then(response => {
        this.listItems.next(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}