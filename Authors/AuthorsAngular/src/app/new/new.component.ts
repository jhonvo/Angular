import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newAuthor : any;
  errorMessage : any;

  constructor( private _Service: AuthorsService,  
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.newAuthor = {
      name : ""
    }
  }

  createAuthor(){
    let observable = this._Service.save(this.newAuthor);
    observable.subscribe((data : any) =>{
      // console.log(data);
      this._router.navigate( ['/'] );
    },
    ( error: any ) => {
      console.log( error );
      this.errorMessage = error.statusText;
    }
    )
  }

}
