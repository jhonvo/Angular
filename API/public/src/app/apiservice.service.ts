import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  pokemonInfo : any;

  constructor(private _http : HttpClient) { 
    var pokemonData = this.getPokemon(4);
    // let habilityData : string = pokemonData.abilities[0].ability.url;
    // console.log( "THIS IS IT " + pokemonData);
    // let habilityData : any = this.habilityShare(pokemonData.abilities[0].ability.url);
  }

  getPokemon2(){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/4');
  }

  getPokemon(id : number ) : any{
    let charmander = this._http.get('https://pokeapi.co/api/v2/pokemon/'+id);
    charmander.subscribe((data : any): any => {
      console.log(`The pokemon name is ${data.forms[0].name}, it is a ${data.types[0].type.name} pokemon and its abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.` );
            
      for (var i : number  = 0; i < data.abilities.length; i++){
        this.habilityShare(data.abilities[i].ability.url);
      }
      
    })};

  habilityShare(hab : string) :any {
    let otherPokemons = this._http.get(hab);
    otherPokemons.subscribe((data : any) => {
      console.log(`${data.pokemon.length} pokemos share the ${data.name} ability.`);
      return data;
    })};

}
