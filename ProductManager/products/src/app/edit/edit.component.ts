import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id : any;

  Product : any;

  errorMessage :  any;

  constructor(private _service : ProductsService, private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');
    console.log("THE ID", this.id);
    this.getOne (this.id);
    // console.log("FORM SUBMITTED")

  }

  getOne (id : String){
    let observable = this._service.getOne(id);
    observable.subscribe(
      (data : any) =>{
        // console.log("RESPONSE", data);
        this.Product =  data[0];
      },
      ( error: any ) => {
        // console.log("ERROR", error );
        this.errorMessage = error.statusText;
      }
    )
  }

  update (){
    console.log("PRODUCT", this.Product)
    let observable = this._service.update(this.id, this.Product);
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
