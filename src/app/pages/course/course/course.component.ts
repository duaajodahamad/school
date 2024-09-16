import { Component, Input } from '@angular/core';
import { CourseModel } from '../../../Models/courseModel';
import { CourseDataService } from '../../../services/course-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  title:string = 'Course List';
  @Input() courses: CourseModel[] = [];


  constructor(public courseDataService: CourseDataService) {}
  ngOnInit() {
    this.courseDataService.courses.subscribe((c) => {
      this.courses = c;
    });

  }
}
