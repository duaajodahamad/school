import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  title: string = 'Student List 1';


@Input()  students: Student[]   =     [
  { id: 1, name: 'John', email: 'test1@gmail.com' },
  { id: 2, name: 'Jane', email: 'test2@gmail.com' },
  { id: 3, name: 'Jim', email: 'test3@gmail.com' },
  { id: 4, name: 'Jack', email: 'test4@gmail.com' },
  { id: 5, name: 'Jill', email: 'test5@gmail.com' },
];

  constructor() {}
}

interface Student {
  id: number;
  name: string;
  email: string;
  grade?: number;
}
