import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  k : string = '9779a3aa683b7134333226d8a15262fa';

  constructor( private _http : HttpClient) { }

  getWeather (city : String, state : string){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' +  city +  ',' +  state +  ',us&units=metric&appid=' + this.k)
    // return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=san%20jose,wa,us&appid=9779a3aa683b7134333226d8a15262fa&units=metric')

  }

}
