import { Injectable } from '@angular/core';
import { CourseModel } from '../Models/courseModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  sourceCourseModel: CourseModel[] = [
    { id: 1, name: 'Angular', description: 'Angular course' },
    { id: 2, name: 'React', description: 'React course' },
    { id: 3, name: 'Vue', description: 'Vue course' },
    { id: 4, name: 'Node', description: 'Node course' },
    { id: 5, name: 'Python', description: 'Python course' },
  ];

  public courses: BehaviorSubject<CourseModel[]> = new BehaviorSubject<
    CourseModel[]
  >([]);
  dataSource = this.courses.asObservable();
  constructor() {
    this.courses.next(this.sourceCourseModel);
  }

  update(course: CourseModel) {
    this.sourceCourseModel.push(course);
    this.courses.next(this.sourceCourseModel);
  }

  deleteCourse(id: number) {
    this.sourceCourseModel = this.sourceCourseModel.filter(
      (course) => course.id !== id
    );
    this.courses.next(this.sourceCourseModel);
  }
  updateCourse(course: CourseModel) {
    const index = this.sourceCourseModel.findIndex((c) => c.id === course.id);
    if (index !== -1) {
      this.sourceCourseModel[index] = course;
      this.courses.next(this.sourceCourseModel);
    }
  }
}
