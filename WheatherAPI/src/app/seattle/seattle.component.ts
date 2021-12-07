import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  data : any;

  constructor( private _weatherApi : WeatherapiService) { }

  ngOnInit(): void {
    let observable = this._weatherApi.getWeather('seattle','wa');
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
