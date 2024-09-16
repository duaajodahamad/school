import { StudnetModel } from './../Models/student.modle'; 
import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentdataService {

  sourceStudentModel: StudnetModel[]=[
    { stId: 1, Name: 'John', email: 'test1@gmail.com', phone: '1234567890' },
    { stId: 2, Name: 'Jane', email: 'test2@gmail.com', phone: '1234567890' },
    { stId: 3, Name: 'Jim', email: 'test3@gmail.com', phone: '1234567890' },
    { stId: 4, Name: 'Jack', email: 'test4@gmail.com', phone: '1234567890' },
    { stId: 5, Name: 'Jill', email: 'test5@gmail.com', phone: '1234567890' },
  ];

  public students: BehaviorSubject<StudnetModel[]> = new BehaviorSubject<
  StudnetModel[]
>([]);
satasource = this.students.asObservable();
constructor() {
  this.students.next(this.sourceStudentModel);
}

update(st: StudnetModel) {
  this.sourceStudentModel.push(st);
   this.students.next(this.sourceStudentModel);
}
 
}
