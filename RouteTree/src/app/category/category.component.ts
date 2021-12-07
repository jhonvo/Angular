import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat : any;

  constructor( private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.cat = this._route.snapshot.paramMap.get('cat');

  }
}
