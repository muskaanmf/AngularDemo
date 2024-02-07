import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    ShowdetailsComponent,
    UpdatestudentComponent,
    AddstudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
