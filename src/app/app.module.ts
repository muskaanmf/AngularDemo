import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EmailPatternDirective } from './directive/email-pattern.directive';
import { MatchPasswordDirective } from './directive/match-password.directive';
import { PasswordPatternDirective } from './directive/password-pattern.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    ShowdetailsComponent,
    UpdatestudentComponent,
    AddstudentComponent,
    EmailPatternDirective,
    MatchPasswordDirective,
    PasswordPatternDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
