import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Item } from './item.model';
import { Config } from './../shared/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  
  constructor(private http: Http) { }

  // create(item: Item): any { // todo promise
  //   return this.http.post(`${Config.API}/item`, item)
  //     .toPromise()
  //     .then(response => response.json() as Item)
  //     .catch(error => console.log(error));
  // }

  // get(itemId: string): any { // todo promise
  //   return this.http.get(`${Config.API}/item/${itemId}`)
  //     .toPromise()
  //     .then(response => response.json() as Item)
  //     .catch(error => console.log(error));
  // }
}