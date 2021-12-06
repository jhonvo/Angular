import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApitasksService } from './tasks/apitasks.service';
import { TasksComponent } from './tasks/tasks.component';
import { SingletaskComponent } from './singletask/singletask.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SingletaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApitasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
