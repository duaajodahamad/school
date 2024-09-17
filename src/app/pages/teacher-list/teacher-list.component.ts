import { Component, OnInit } from '@angular/core';
import { teacher } from '../../Models/teacher';
import { CommonModule } from '@angular/common';
import { TeacherDataService } from '../../services/teacher-data.service';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule],
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
