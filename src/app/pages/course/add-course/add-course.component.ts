import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CourseModel } from '../../../Models/courseModel';
import { CourseDataService } from '../../../services/course-data.service';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseForm: CourseModel = {
    id: 0,
    name: '',
    description: '',
  };
  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public courseDataService: CourseDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.editMode = true;
        this.getCourseById(Number(id));
      }
    });
  }

  getCourseById(id: number) {
    const course = this.courseDataService.sourceCourseModel.find(
      (c) => c.id === id
    );
    if (course) {
      this.courseForm = { ...course };
    }
  }

  Onsubmit() {
    if (this.editMode) {
      this.courseDataService.updateCourse(this.courseForm);
    } else {
      this.courseDataService.update(this.courseForm);
    }
    this.router.navigate(['courseList']);
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
