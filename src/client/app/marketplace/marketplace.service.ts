import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Config } from './../shared/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarketplaceService {
  
  constructor(private http: Http) { }

  list(): any { // todo promise
    return this.http.get(`${Config.API}/item`)
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}