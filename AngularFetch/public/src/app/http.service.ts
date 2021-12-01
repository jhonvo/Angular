import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getRecords();
    this.getOneRecord();
  }

  getRecords(){
    let tempObservable = this._http.get('http://localhost:8080/all');
    tempObservable.subscribe(data => console.log("Got all records!", data));
  }

  getOneRecord(){
    let tempObservable = this._http.get('http://localhost:8080/test');
    tempObservable.subscribe(data => console.log("Got one record!", data));
  }

}


