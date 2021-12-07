import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  id : any;

  constructor( private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

  }

}
