import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks:any[] = []
  oneTask:any[]=[]
  constructor(private _httpService: HttpService){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    // this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();

    observable.subscribe((data:any) => {
          console.log("Got our tasks!", data)

          this.tasks = data
          console.log(this.tasks)
       });
  }

  getTaskFromService(title:string){
    let observable = this._httpService.getTask(title);

    observable.subscribe((data:any) => {
          console.log("Got one task!", data)

          this.oneTask.push(data)
          console.log(this.tasks)
       });
  }
}
