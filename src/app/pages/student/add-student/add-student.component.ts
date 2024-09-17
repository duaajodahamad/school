import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { StudnetModel } from '../../../Models/student.modle';
import { StudentdataService } from '../../../services/studentdata.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  // @Output() studentAdded = new EventEmitter<StudnetModel>();

  studentForm: StudnetModel = {
    email: '',
    Name: '',
    stId: 0,
    phone: '',
  };

  constructor(
    private router: Router,
    public studentService: StudentdataService
  ) {}

  Onsubmit() {
    //     const storedStudents = localStorage.getItem('students');
    // let students: StudnetModel[] = storedStudents ? JSON.parse(storedStudents) : [];

    // students.push(this.studentForm);
    // localStorage.setItem('students', JSON.stringify(students));

    this.studentService.update(this.studentForm);
    this.router.navigate(['studentlist']);
    //redirect to the student list
  }
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
