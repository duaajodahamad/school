import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { teacher } from '../../Models/teacher';
import { FormsModule } from '@angular/forms';
import { TeacherDataService } from '../../services/teacher-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css',
})
export class AddTeacherComponent {
  teacherObj: teacher = { id: 0, email: '', name: '' };

  constructor(
    private teacherService: TeacherDataService,
    private router: Router
  ) {}

  Onsubmit() {
    console.log(this.teacherObj);
    this.teacherService.update(this.teacherObj);
    this.router.navigate(['/teacher-list']);
  }
}
