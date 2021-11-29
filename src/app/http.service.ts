import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getTask();
    this.getPokemon()
  }

  getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('http://localhost:8181');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }

 getTask(){
   let tempObservable = this._http.get('http://localhost:8181/Learn Angular');
   tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }

 getPokemon(){
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/ditto');
    tempObservable.subscribe((data:any) => {
      const {name, abilities}  = data
      const ditto = {name, abilities}
      console.log(`Got our Pokemon!,name: ${name},abilities: ${abilities[0].ability.name}, ${abilities[1].ability.name}` )
      
      abilities.forEach( (ability:any) => {
        this.getPokemonWithSameAbility(ability.ability.url)
        
      });
    });
 }

 getPokemonWithSameAbility(ability:string){
   
    let tempObservable = this._http.get(`${ability}`);
    tempObservable.subscribe((data:any) => console.log(data.pokemon))
 }


}
