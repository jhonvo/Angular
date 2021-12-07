import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct : any;
  errorMessage : any;

  constructor( private _service : ProductsService, private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.newProduct = {
      title : "",
      price : "",
      imageURL : ""
    }
  }

  createProduct(){
    let observable = this._service.create(this.newProduct);
    observable.subscribe(
      (data : any) =>{
        console.log(data);
        this._router.navigate( ['/products'] );
      },
      ( error: any ) => {
        console.log( error );
        this.errorMessage = error.statusText;
      }
    )

  }

}
