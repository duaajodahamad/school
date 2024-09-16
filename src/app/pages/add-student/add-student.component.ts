import { Component } from '@angular/core';
import { StudnetModel } from '../../Models/student.modle';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
 
  constructor(private router:Router) {}

  studentForm: StudnetModel = {
    email: '',
    Name: '',
    stId: 0,
    phone: '',
  };

  Onsubmit() {
    this.router.navigate(['studentlist']); 
    //redirect to the student list
  }
}
