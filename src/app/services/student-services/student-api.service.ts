import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudnetBackEndModel } from '../../Models/student.modle';

@Injectable({
  providedIn: 'root',
})
export class StudentApiService {
  private baseUrl = 'https://localhost:7194/api/Student';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<StudnetBackEndModel[]> {
    return this.http.get<StudnetBackEndModel[]>(this.baseUrl);
  }

  getStudentById(id: number): Observable<StudnetBackEndModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<StudnetBackEndModel>(url);
  }

  updateStudent(student: StudnetBackEndModel): Observable<void> {
    const url = `${this.baseUrl}/${student.id}`;
    return this.http.put<void>(url, student);
  }

  deleteStudent(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  addStudent(student: StudnetBackEndModel): Observable<void> {
    return this.http.post<void>(this.baseUrl, student);
  }

  checkPhoneNumber(
    phoneNumber: string
  ): Observable<StudnetBackEndModel | null> {
    return this.http.get<StudnetBackEndModel | null>(
      `${this.baseUrl}/CheckPhoneNumber/${phoneNumber}`
    );
  }
}
