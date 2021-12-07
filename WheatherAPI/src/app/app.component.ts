import { Component } from '@angular/core';
import { WeatherapiService } from './weatherapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WheatherAPI';

  constructor (private _weatherApi : WeatherapiService){}
  
}
