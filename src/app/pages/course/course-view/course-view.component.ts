import { Component } from '@angular/core';
import { CourseModel } from '../../../Models/courseModel';
import { ActivatedRoute } from '@angular/router';
import { TeacherModel } from '../../../Models/teacherModel';
import { CourseDataService } from '../../../services/course-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css',
})
export class CourseViewComponent {
  courseId!: number;
  course: CourseModel = {
    id: 0,
    name: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private courseDataService: CourseDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseId = Number(params.get('id'));
      this.getTeacherById(this.courseId);
    });
  }

  getTeacherById(id: number): void {
    const allCourses = this.courseDataService.sourceCourseModel;
    this.course = allCourses.find((t) => t.id === id) || ({} as CourseModel);
  }
}
