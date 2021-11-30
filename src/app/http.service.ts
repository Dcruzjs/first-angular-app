import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getTask();
    // this.getPokemon()
  }

  getTasks(){
    // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Return the observable to wherever the getTasks method was invoked.
    return this._http.get('http://localhost:8181/');
  }

  createTask(task:any){
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/tasks', task);  
  }

  getTask(task:string){
   return this._http.get(`http://localhost:8181/${task}`);
 }

//  getPokemon(){
//     let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/ditto');
//     tempObservable.subscribe((data:any) => {
//       const {name, abilities}  = data
//       const ditto = {name, abilities}
//       console.log(`Got our Pokemon!,name: ${name},abilities: ${abilities[0].ability.name}, ${abilities[1].ability.name}` )

//       abilities.forEach( (ability:any) => {
//         this.getPokemonWithSameAbility(ability.ability.url)
        
//       });
//     });
//  }

//  getPokemonWithSameAbility(ability:string){
   
//     let tempObservable = this._http.get(`${ability}`);
//     tempObservable.subscribe((data:any) => console.log(data.pokemon))
//  }


}
