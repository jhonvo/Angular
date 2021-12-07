import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any;
  errorMessage : any;

  constructor(private _service : ProductsService, private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll (){
    let observable = this._service.getAll();
    observable.subscribe(
      (data : any) =>{
        console.log(data);
        this.products =  data;
      },
      ( error: any ) => {
        console.log( error );
        this.errorMessage = error.statusText;
      }
    )
  }

  removeProduct(id : string){
    let observable = this._service.remove(id);
    observable.subscribe(
      (data : any) =>{
        console.log(data);
        this.getAll();
      },
      ( error: any ) => {
        console.log( error );
        this.errorMessage = error.statusText;
      }
    )
  }

}
