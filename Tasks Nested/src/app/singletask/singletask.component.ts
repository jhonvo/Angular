import { Component, OnInit, Input } from '@angular/core';
import { ApitasksService } from '../tasks/apitasks.service';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingletaskComponent implements OnInit {

  @Input() taskToShow: any;

  constructor( private _apiTaskService : ApitasksService) { }

  ngOnInit(): void {

  }

}
