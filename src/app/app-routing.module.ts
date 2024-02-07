import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [
  { path: 'home', component: StudentlistComponent },
  { path: 'details/:id', component: ShowdetailsComponent },
  { path: 'update/:id', component: UpdatestudentComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: '', pathMatch: 'full', component: StudentlistComponent } // default path
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
