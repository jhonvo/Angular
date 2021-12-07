import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor( private _http : HttpClient ) { }

  getAll (){
    return this._http.get('http://localhost:8000/')
  }

  save(author:any){
    return this._http.post('http://localhost:8000/authors', author)
  }

  update(id : String, author : any){
    return this._http.put('http://localhost:8000/edit/' + id, author)
  }

  remove(id : String){
    return this._http.delete('http://localhost:8000/author/'+id)
  }

  getOne (id : String){
    return this._http.get('http://localhost:8000/'+id)
  }

}
