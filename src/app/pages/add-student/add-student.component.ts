import { Component } from '@angular/core';
import { StudnetModel } from '../../Models/student.modle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

studentForm : StudnetModel  = {
  email:"",
  Name:"",
  stId:0,
  phone:""
} ;

Onsubmit(){
  console.log(this.studentForm)
}
}
