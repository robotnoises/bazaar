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

  // Observe status codes 401 && 403, redirect if necessary
  private redirectUnauthorized(error: Response): Observable<Response> {
    if (error.status === 401 || error.status === 403) {
      window.location.href = '/';
    }
    return Observable.throw(error);
  }
  
  get(url: string, options?: RequestOptionsArgs): Observable<Response> | any {
    return super.get(url, options)
      .catch<Response>(error => {
        return this.redirectUnauthorized(error);
      });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, options)
      .catch<Response>(error => {
        return this.redirectUnauthorized(error);
      });
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, options)
      .catch<Response>(error => {
        return this.redirectUnauthorized(error);
      });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, options)
      .catch<Response>(error => {
        return this.redirectUnauthorized(error);
      });
  }
}