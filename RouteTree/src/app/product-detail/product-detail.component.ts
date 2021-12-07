import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id : any;

  constructor( private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

  }

}
