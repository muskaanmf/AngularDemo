import { Component } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  student: Student = new Student();
  pass: string = '';
  confirm: string = '';
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute){}


  addStudent(){
    if(this.pass == this.confirm){
      this.student.password = this.pass;
      console.log(this.student);
      this.router.navigate(['home']);
    }
    

  }
  
}
