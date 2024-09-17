import { Component } from '@angular/core';
import { StudnetModel } from '../../../Models/student.modle';
import { ActivatedRoute } from '@angular/router';
import { StudentdataService } from '../../../services/studentdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css',
})
export class StudentViewComponent {
  studentId!: number;
  student: StudnetModel = {
    stId: 0,
    Name: '',
    email: '',
    phone: '',
  };

  constructor(
    private route: ActivatedRoute,
    private studentdataService: StudentdataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studentId = Number(params.get('id'));
      this.getTeacherById(this.studentId);
    });
  }

  getTeacherById(id: number): void {
    const allStudent = this.studentdataService.sourceStudentModel;
    this.student =
      allStudent.find((t) => t.stId === id) || ({} as StudnetModel);
  }
}
