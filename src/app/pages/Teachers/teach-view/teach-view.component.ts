import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherDataServiceService } from '../../../services/teacher-data.service';
import { TeacherModel } from '../../../Models/teacherModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teach-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teach-view.component.html',
  styleUrls: ['./teach-view.component.css'],
})
export class TeachViewComponent implements OnInit {
  teacherId!: number;
  teacher: TeacherModel = {
    id: 0,
    name: '',
  };

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherDataServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.teacherId = Number(params.get('id'));
      this.getTeacherById(this.teacherId);
    });
  }

  getTeacherById(id: number): void {
    const allTeachers = this.teacherService.sourceTeacherModel;
    this.teacher = allTeachers.find((t) => t.id === id) || ({} as TeacherModel);
  }
}
