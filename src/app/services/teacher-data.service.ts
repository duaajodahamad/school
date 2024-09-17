import { Injectable } from '@angular/core';
import { teacher } from '../Models/teacher';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherDataService {
  teachers: teacher[] = [
    {
      id: 1,
      email: 'test@test.com',
      name: 'test',
    },
    {
      id: 2,
      email: 'test2@test.com',
      name: 'test2',
    },
  ];

  teacherDataSource = new BehaviorSubject<teacher[]>(this.teachers);
  source = this.teacherDataSource.asObservable();
  constructor() {}

  update(teacher: teacher) {
    this.teachers.push(teacher);
    this.teacherDataSource.next(this.teachers);
  }
}
