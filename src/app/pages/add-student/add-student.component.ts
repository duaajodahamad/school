import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() studentAdded = new EventEmitter<StudnetModel>();
  
studentForm : StudnetModel  = {
  email:"",
  Name:"",
  stId:0,
  phone:""
} ;

Onsubmit() {
  const storedStudents = localStorage.getItem('students');
  let students: StudnetModel[] = storedStudents ? JSON.parse(storedStudents) : [];

  students.push(this.studentForm);
  localStorage.setItem('students', JSON.stringify(students));

  this.studentAdded.emit(this.studentForm);

  this.studentForm = { email: "", Name: "", stId: 0, phone: "" };
}

}