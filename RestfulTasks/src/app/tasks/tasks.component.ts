import { Component, OnInit } from '@angular/core';
import { ApitasksService } from './apitasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : any;
  newTask : any;
  updateTask : any;
  id : string = "61a713c029c29eab7f51b921";


  constructor( private _apiTaskService : ApitasksService ) { }

  ngOnInit(): void {
    this.newTask = {
      title : "",
      description : ""
    }
    this.updateTask = {
      title : "",
      description : "",
      _id : ""
    }
    // this.getAllTasks();
    // this.getOneTask(this.id);
  }

  getAllTasks (){
    let observable = this._apiTaskService.getTasks();
    observable.subscribe((data:any)=> {
      this.tasks = data;
    });
  }

  getOneTask (id:string){
    let observable = this._apiTaskService.getOneTask(id);
    observable.subscribe((data:any)=> {
      this.updateTask.title = data[0].title;
      this.updateTask.description = data[0].description;
      this.updateTask._id = data[0]._id;
    });
  }

  removeOneTask (id:string){
    let observable = this._apiTaskService.removeOneTask(id);
    observable.subscribe((data:any)=> {
      this.getAllTasks();
    });
    
  }

  updateOneTask (id:String,taskInfo:any){
    console.log("This is task info", taskInfo, "ID", id);
    let observable = this._apiTaskService.updatedTask(id, taskInfo);
    observable.subscribe((data:any)=> {
      this.getAllTasks();
      this.updateTask = { title : "", description : "", _id : "" }
    });
  }

  createTask (taskInfo:any){
    let observable = this._apiTaskService.newTask( taskInfo);
    observable.subscribe((data:any)=> {
      this.getAllTasks();
      this.newTask = { title : "", description : "" }
    });
  }



}
