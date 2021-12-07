import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  getAll (){
    return this._http.get('/products/all')
  }

  getOne (id : String){
    return this._http.get('/product/'+id)
  }

  create (product : any){
    return this._http.post('/products', product)
  }

  update (id : String, product : any){
    return this._http.put('/product/edit/'+id, product)
  }

  remove (id : string){
    return this._http.delete('/product/'+id)
  }
}
