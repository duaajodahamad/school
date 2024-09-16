import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StudnetModel } from '../../Models/student.modle';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  title: string = 'Student List 1';


@Input()  students: StudnetModel[]   =[];

  constructor() {}
  ngOnInit() {
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
    console.log('Loaded students:', this.students);

  }
  
}

