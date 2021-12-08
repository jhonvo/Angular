import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http : HttpClient) { }

  getAll (){
    return this._http.get('/notes/all')
  }

  saveNote (note:any){
    return this._http.post('/notes', note)
  }
}
