import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StudnetModel } from '../../Models/student.modle';
import { StudentdataService } from '../../services/studentdata.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  title: string = 'Student List 1';

  @Input() students: StudnetModel[] = [];
  // @Input()  students: StudnetModel[]   =     [
  //   { stId: 1, Name: 'John', email: 'test1@gmail.com', phone: '1234567890' },
  //   { stId: 2, Name: 'Jane', email: 'test2@gmail.com', phone: '1234567890' },
  //   { stId: 3, Name: 'Jim', email: 'test3@gmail.com', phone: '1234567890' },
  //   { stId: 4, Name: 'Jack', email: 'test4@gmail.com' , phone: '1234567890'},
  //   { stId: 5, Name: 'Jill', email: 'test5@gmail.com', phone: '1234567890' },
  // ];

  constructor(public studentservice: StudentdataService) {}
  ngOnInit() {
    this.studentservice.students.subscribe((c) => {
       
      this.students = c;
    });
    // this.students = this.studentservice.students;
    // const storedStudents = localStorage.getItem('students');
    // this.students = storedStudents ? JSON.parse(storedStudents) : [];
    // console.log('Loaded students:', this.students);
  }
}
