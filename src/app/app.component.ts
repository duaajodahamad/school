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

 

}
