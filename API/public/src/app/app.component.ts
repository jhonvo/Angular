import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  pokemonInfo : any;
  constructor(private _apiserviceService: ApiserviceService){
    this.pokemonInfo = _apiserviceService.pokemonInfo;
    console.log("THIS IS FROM THE COMPONENT" + this.pokemonInfo);
  }
}
