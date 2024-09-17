import { Injectable } from '@angular/core';
import { TeacherModel } from '../Models/teacherModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherDataServiceService {
  sourceTeacherModel: TeacherModel[] = [
    { id: 1, name: 'Teacher 1' },
    { id: 2, name: 'Teacher 2' },
    { id: 3, name: 'Teacher 3' },
  ];

  public teachers: BehaviorSubject<TeacherModel[]> = new BehaviorSubject<
    TeacherModel[]
  >([]);
  dataSource = this.teachers.asObservable();
  constructor() {
    this.teachers.next(this.sourceTeacherModel);
  }

  update(course: TeacherModel) {
    this.sourceTeacherModel.push(course);
    this.teachers.next(this.sourceTeacherModel);
  }
  deleteTeacher(id: number) {
    this.sourceTeacherModel = this.sourceTeacherModel.filter(
      (teacher) => teacher.id !== id
    );
    this.teachers.next(this.sourceTeacherModel);
  }
}
