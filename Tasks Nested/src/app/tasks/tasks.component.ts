import { Component, OnInit } from '@angular/core';
import { ApitasksService } from './apitasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : any;
  singletask : any;
  id : string = "61a713c029c29eab7f51b921";

  constructor( private _apiTaskService : ApitasksService ) { }

  ngOnInit(): void {
    // this.getAllTasks();
    // this.getOneTask(this.id);
  }

  getAllTasks (){
    let observable = this._apiTaskService.getTasks();
    observable.subscribe((data:any)=> {
      this.tasks = data;
      // this.getOneTask(this.id);
    });
  }

  getOneTask (id:string){
    let observable = this._apiTaskService.getOneTask(id);
    observable.subscribe((data:any)=> {
      this.singletask = data[0];
      console.log("Single Task", data[0] );
    });
  }

}
