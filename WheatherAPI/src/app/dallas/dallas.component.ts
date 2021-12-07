import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  data : any;

  constructor( private _weatherApi : WeatherapiService) { }

  ngOnInit(): void {
    let observable = this._weatherApi.getWeather('dallas','tx');
    observable.subscribe(
      (data : any) =>{
        this.data = data;
        console.log("DATA", this.data)
      },
      ( error: any ) => {
        console.log( error );
      }
    )
  }
}
