import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { ChildComComponent } from './pages/child-com/child-com.component';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StudentListComponent,
    AddStudentComponent,
    ChildComComponent,
    LoginComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'school';
  islogin:boolean = false; 
  showAddForm: boolean = false;
  messageToChild: string = 'Hey from parent ';
  btnText: string = 'Add Student';

 StudentList =[
  { id: 1, name: 'John',  email: 'test1@gmail.com'  },
  { id: 2, name: 'Jane', email: 'test2@gmail.com' },
  { id: 3, name: 'Jim', email: 'test3@gmail.com' },
  { id: 4, name: 'Jack', email: 'test4@gmail.com' },
  { id: 5, name: 'Jill', email: 'test5@gmail.com' },
];

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
