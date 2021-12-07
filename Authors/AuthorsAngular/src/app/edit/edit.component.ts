import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  current : any;

  id : any;

  errorMessage : any;

  constructor( private _Service: AuthorsService,  
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

    this.getOne(this.id);

  }

  getOne (id : String){
    let observable = this._Service.getOne(id);
    observable.subscribe(
      (data : any) =>{
        this.current = data[0];
        console.log("CURRENT", this.current)
      },
      ( error: any ) => {
        console.log( error );
        this.errorMessage = error.statusText;
      })
  }  

  updateAuthor (){
    let observable = this._Service.update(this.id, this.current);
    observable.subscribe(
      (data : any) =>{
        this._router.navigate( ['/'] );
        // console.log("CURRENT", this.current)
      },
      ( error: any ) => {
        console.log( error );
        this.errorMessage = error.statusText;
      })

  }

}
