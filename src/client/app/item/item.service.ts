import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Item } from './item.model';
import { Config } from './../shared/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
  
  constructor(private http: Http) { }

  create(item: Item): Promise<Item> { // todo promise
    return this.http.post(`${Config.API}/item`, item)
      .toPromise()
      .then(response => response.json() as Item)
      .catch(error => console.log(error));
  }

  get(itemId: string): Promise<Item> { // todo promise
    return this.http.get(`${Config.API}/item/${itemId}`)
      .toPromise()
      .then(response => response.json() as Item)
      .catch(error => console.log(error));
  }
}