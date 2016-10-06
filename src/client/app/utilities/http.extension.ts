import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpExtension extends Http {


  constructor(backend: ConnectionBackend) {
    /**
     * Special note: all requests will be set to withCredentials: true
     */
    super(backend, new RequestOptions({withCredentials: true}));
  }

  private redirectUnauthorized(error: any): Observable<Response> {
    if (error.status === 401 || error.status === 403) {
      window.location.href = '/';
    }
    return Observable.throw(error)
  }
  
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options).catch<Response>(error => this.redirectUnauthorized);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, options).catch<Response>(error => this.redirectUnauthorized);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, options).catch<Response>(error => this.redirectUnauthorized);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, options).catch<Response>(error => this.redirectUnauthorized);
  }
}