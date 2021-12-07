import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  data : any;

  constructor( private _weatherApi : WeatherapiService) { }

  ngOnInit(): void {
    let observable = this._weatherApi.getWeather('chicago','il');
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
