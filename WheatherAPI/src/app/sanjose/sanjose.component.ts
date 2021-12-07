import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  data : any;

  constructor( private _weatherApi : WeatherapiService) { }

  ngOnInit(): void {
    let observable = this._weatherApi.getWeather('san jose','ca');
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
