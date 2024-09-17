import { Component } from '@angular/core';
import { AddStudentComponent } from '../pages/add-student/add-student.component';
import { StudentListComponent } from '../pages/student-list/student-list.component';
import { ChildComComponent } from '../pages/child-com/child-com.component';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { StudnetModel } from '../Models/student.modle';
import { TeacherListComponent } from '../pages/teacher-list/teacher-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    AddStudentComponent,
    StudentListComponent,
    ChildComComponent,
    CommonModule,
    LoginComponent,
    TeacherListComponent,
    RouterModule
  ],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  title = 'school';
  islogin: boolean = false;
  showAddForm: boolean = false;
  messageToChild: string = 'Hey from parent ';
  btnText: string = 'Add Student';

  loginparams = { islogin: false };

  // List of students for the table
  StudentList :StudnetModel[]= [
    { stId: 1, Name: 'John', email: 'test1@gmail.com', phone: '1234567890' },
    { stId: 2, Name: 'Jane', email: 'test2@gmail.com', phone: '1234567890' },
    { stId: 3, Name: 'Jim', email: 'test3@gmail.com', phone: '1234567890' },
    { stId: 4, Name: 'Jack', email: 'test4@gmail.com' , phone: '1234567890'},
    { stId: 5, Name: 'Jill', email: 'test5@gmail.com', phone: '1234567890' },
  ];

  constructor() {
    let islogin = localStorage.getItem('islogin');
    if (islogin == null) {
      localStorage.setItem('islogin', 'false');
    } else if (islogin === 'true') {
      this.loginparams.islogin = true;
    }

    const storedStudents = localStorage.getItem('students');
    if (!storedStudents) {
      localStorage.setItem('students', JSON.stringify(this.StudentList));
    } else {
      this.StudentList = JSON.parse(storedStudents);
    }
  }

  onStudentAdded() {
    const storedStudents = localStorage.getItem('students');
    this.StudentList = storedStudents ? JSON.parse(storedStudents) : [];
  }

  showAdd() {
    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.btnText = 'Hide Form';
    } else {
      this.btnText = 'Add Student';
    }
  }

  logout(){
    localStorage.removeItem("islogin");
    this.loginparams.islogin = false;
  }

}
