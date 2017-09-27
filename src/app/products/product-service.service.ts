import { Injectable } from '@angular/core';
import {Iproduct} from './iproduct';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Injectable()
export class ProductServiceService {


  product:any;

  constructor(private _http : Http) { }

  create(product) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/addproducts', product, { headers: headers })
      .map(res => res.json());
  }


  getProducts() : Observable<Iproduct[]> {

    return this._http.get('/products2')
      .map((response:Response) => <Iproduct[]>response.json());
  }
   /* return this._http.get('api/products.json')
      .map((response:Response) => <Iproduct[]>response.json());*/
  }

