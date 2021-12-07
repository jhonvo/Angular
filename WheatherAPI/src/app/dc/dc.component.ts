import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  data : any;

  constructor( private _weatherApi : WeatherapiService) { }

  ngOnInit(): void {
    let observable = this._weatherApi.getWeather('washington','cd');
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
