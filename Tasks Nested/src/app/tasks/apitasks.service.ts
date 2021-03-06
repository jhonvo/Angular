import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApitasksService {

  

  constructor(private _http : HttpClient) { }

  getTasks (){
    return this._http.get('http://localhost:8000/tasks')
  }
  
  getOneTask (id : string){
    return this._http.get('http://localhost:8000/tasks/'+id)
  }


}
