import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand : any;

  constructor( private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.brand = this._route.snapshot.paramMap.get('brand');

  }

}
