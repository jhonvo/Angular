import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  id : any;

  constructor( private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

  }
}
