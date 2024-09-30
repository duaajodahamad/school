import { HttpClient } from '@angular/common/http';
import { StudnetModel } from './../Models/student.modle';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentdataService {
  sourceStudentModel: StudnetModel[] = [
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
  constructor(private http: HttpClient) {
    this.getStudent();
    this.students.next(this.sourceStudentModel);
  }

  getStudent()  {
    return this.http.get('https://localhost:7194/api/Setting/Get10Student');
  }

  update(st: StudnetModel) {
    this.sourceStudentModel.push(st);
    this.students.next(this.sourceStudentModel);
  }

  deleteStudent(id: number) {
    this.sourceStudentModel = this.sourceStudentModel.filter(
      (student) => student.stId !== id
    );
    this.students.next(this.sourceStudentModel);
  }
  updateStudent(student: StudnetModel) {
    const index = this.sourceStudentModel.findIndex(
      (s) => s.stId === student.stId
    );
    if (index !== -1) {
      this.sourceStudentModel[index] = student;
      this.students.next(this.sourceStudentModel);
    }
  }

  search(input: string) {
    let newValues = this.sourceStudentModel.filter(
      (c) =>
        c.Name.includes(input) ||
        c.email.includes(input) ||
        c.stId.toString().includes(input) ||
        c.phone.includes(input)
    );

    this.students.next(newValues);
  }
}
