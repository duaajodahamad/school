import { Component } from '@angular/core';
import {
  StudnetBackEndModel,
  StudnetModel,
} from '../../../Models/student.modle';
import { ActivatedRoute } from '@angular/router';
import { StudentdataService } from '../../../services/studentdata.service';
import { CommonModule } from '@angular/common';
import { StudentApiService } from '../../../services/student-services/student-api.service';

@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css',
})
export class StudentViewComponent {
  studentId!: number;
  student: StudnetBackEndModel = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
  };

  constructor(
    private route: ActivatedRoute,
    private studentdataService: StudentdataService,
    private studentApiService: StudentApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studentId = Number(params.get('id'));
      this.getStudentById(this.studentId);
    });
  }

  getStudentById(id: number): void {
    this.studentApiService.getStudentById(id).subscribe((student) => {
      this.student = student;
    });
  }
}
