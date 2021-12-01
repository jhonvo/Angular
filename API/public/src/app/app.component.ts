import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon: any ;
  title = 'public';
  pokemonInfo : any;
  constructor(private _apiserviceService: ApiserviceService){
    this.pokemonInfo = _apiserviceService.pokemonInfo;
    console.log("THIS IS FROM THE COMPONENT" + this.pokemonInfo);
  }

  ngOnInit(): void {
      console.log("Before loading pokemons: ", this.pokemon);
      let bulbasaur = this._apiserviceService.getPokemon2();
      bulbasaur.subscribe(
        (data:any) =>{
          console.log("estos es data: "+data)
          this.pokemon=data
          console.log("Este es Bulbasaur: "+this.pokemon.abilities[0])
          console.log("esta es la primera habilidad de Bulbasaur: "+this.pokemon.abilities[0].ability.name)
        },
        (error:any) =>{
          console.log("something went wrong", error);
        })
}
}
