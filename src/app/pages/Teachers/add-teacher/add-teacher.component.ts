import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherModel } from '../../../Models/teacherModel';
import { TeacherDataServiceService } from '../../../services/teacher-data.service';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css',
})
export class AddTeacherComponent {
  teacherForm: TeacherModel = {
    id: 0,
    name: '',
  };

  constructor(
    private router: Router,
    public teacherDataServiceService: TeacherDataServiceService
  ) {}

  Onsubmit() {
    this.teacherDataServiceService.update(this.teacherForm);
    this.router.navigate(['teacherList']);
  }
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
