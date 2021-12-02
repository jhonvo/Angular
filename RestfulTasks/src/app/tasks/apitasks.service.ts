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

  newTask (newTask : any) {
    return this._http.post('http://localhost:8000/tasks', newTask);
  }

  updatedTask (id: String, newTask : any) {
    return this._http.put('http://localhost:8000/tasks/'+id, newTask);
  }

  removeOneTask (id : string){
    return this._http.delete('http://localhost:8000/tasks/'+id)
  }

}
