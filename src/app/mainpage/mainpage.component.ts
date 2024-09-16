import { Component } from '@angular/core';
import { AddStudentComponent } from '../pages/add-student/add-student.component';
import { StudentListComponent } from '../pages/student-list/student-list.component';
import { ChildComComponent } from '../pages/child-com/child-com.component';
import { LoginComponent } from '../login/login.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    AddStudentComponent,
    StudentListComponent,
    ChildComComponent,
    CommonModule,
    LoginComponent,
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
})

export class MainpageComponent {
 
 
  title = 'school';
  
  islogin: boolean = false;
  showAddForm: boolean = false;
  messageToChild: string = 'Hey from parent ';
  btnText: string = 'Add Student';

  loginparams = { islogin: false };

  StudentList = [
    { id: 1, name: 'John', email: 'test1@gmail.com' },
    { id: 2, name: 'Jane', email: 'test2@gmail.com' },
    { id: 3, name: 'Jim', email: 'test3@gmail.com' },
    { id: 4, name: 'Jack', email: 'test4@gmail.com' },
    { id: 5, name: 'Jill', email: 'test5@gmail.com' },
  ];

  constructor(){
    let islogin= localStorage.getItem("islogin");
    if(islogin==null)
    {
      localStorage.setItem("islogin","false");
    } else if(islogin == "true")
    {
      this.loginparams.islogin = true;
    }
  }


  showAdd() {
    ///false !false => true
    //true !true => false
    //fals !false => true
    // this.showAddForm = !this.showAddForm;

    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.btnText = 'Hide Form';
    } else {
      this.btnText = 'Add Student';
    }
  }
}
