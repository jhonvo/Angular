import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';

  note : any;

  allNotes : any;

  ErrorMessage : any;

  constructor(private _server :  NotesService){
    
  }

  ngOnInit(): void {
    this.note = {
      note : ""
    }

    this.getAll();

  }

  getAll (){
    let observable = this._server.getAll();
    observable.subscribe(
      (data : any) =>{
        this.allNotes = data;
        console.log("ALL NOTES", this.allNotes)
      },
      ( error: any ) => {
        console.log( error );
      }
    )
  }

  saveNote (){
    console.log("SAVNIG", this.note)
    let observable = this._server.saveNote(this.note);
    observable.subscribe(
      (data : any) =>{
        console.log( data );
        this.getAll();
        this.note = {
          note : ""
        }
      },
      ( error: any ) => {
        console.log( error );
        this.ErrorMessage = error.statusText;
      }
    )
  }

}
