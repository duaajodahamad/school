import { Component, OnInit } from '@angular/core';
import { teacher } from '../../Models/teacher';
import { CommonModule } from '@angular/common';
import { TeacherDataService } from '../../services/teacher-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css',
})
export class TeacherListComponent implements OnInit {
  teachers: teacher[] = [];

  constructor(private teacherService: TeacherDataService) {}

  ngOnInit(): void {
    this.teacherService.teacherDataSource.subscribe((c) => {
      this.teachers = c;
    });
  }
}
