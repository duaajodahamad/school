import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModel } from '../../../Models/teacherModel';
import { TeacherDataServiceService } from '../../../services/teacher-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeacherListComponent {
  title: string = 'Teacher List';
  @Input() teachers: TeacherModel[] = [];

  constructor(
    public teacherDataServiceService: TeacherDataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.teacherDataServiceService.teachers.subscribe((c) => {
      this.teachers = c;
    });
  }

  navigateTo(route: string, id?: number) {
    if (id !== undefined) {
      this.router.navigate([`/${route}`, id]);
    } else {
      this.router.navigate([`/${route}`]);
    }
  }

  deleteTeacher(id: number) {
    this.teacherDataServiceService.deleteTeacher(id);
  }
}
