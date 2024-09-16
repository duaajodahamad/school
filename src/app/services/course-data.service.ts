import { Injectable } from '@angular/core';
import { CourseModel } from '../Models/courseModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  sourceStudentModel: CourseModel[]=[
    {id:1, name:'Angular', description:'Angular course'},
    {id:2, name:'React', description:'React course'},
    {id:3, name:'Vue', description:'Vue course'},
    {id:4, name:'Node', description:'Node course'},
    {id:5, name:'Python', description:'Python course'},
  ];

  public courses: BehaviorSubject<CourseModel[]> = new BehaviorSubject<
  CourseModel[]
>([]);
dataSource = this.courses.asObservable();
constructor() {
  this.courses.next(this.sourceStudentModel);
}

update(course: CourseModel) {
  this.sourceStudentModel.push(course);
   this.courses.next(this.sourceStudentModel);
}
 
}
