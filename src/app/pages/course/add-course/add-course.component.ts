import { Component } from '@angular/core';
import { CourseModel } from '../../../Models/courseModel';
import { Router } from '@angular/router';
import { CourseDataService } from '../../../services/course-data.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
})
export class AddCourseComponent {
  courseForm: CourseModel = {
    id: 0,
    name: '',
    description: '',
  };

  constructor(
    private router: Router,
    public courseDataService: CourseDataService
  ) {}

  Onsubmit() {
    this.courseDataService.update(this.courseForm);
    this.router.navigate(['courseList']);
  }
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
