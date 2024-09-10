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


@Input()  students: Student[]   =[];

  constructor() {}
}

interface Student {
  id: number;
  name: string;
  email: string;
  grade?: number;
}
