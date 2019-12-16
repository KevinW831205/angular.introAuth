import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt'

@Injectable()
export class OrderService {

  constructor(private AuthHttp: AuthHttp, http: Http) {
  }

  getOrders() { 

    // let headers = new Headers();
    // let token = localStorage.getItem('token')
    // headers.append('Authorization','Bearer '+token);

    // let options = new RequestOptions({headers: headers});

    // return this.http.get('/api/orders', options)
    return this.AuthHttp.get('/api/orders')
      .map(response => response.json());
  }
}
