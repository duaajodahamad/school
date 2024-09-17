import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherModel } from '../../../Models/teacherModel';
import { TeacherDataServiceService } from '../../../services/teacher-data.service';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
})
export class AddTeacherComponent implements OnInit {
  teacherForm: TeacherModel = {
    id: 0,
    name: '',
  };
  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public teacherDataServiceService: TeacherDataServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.editMode = true;
        this.getTeacherById(Number(id));
      }
    });
  }

  getTeacherById(id: number) {
    const teacher = this.teacherDataServiceService.sourceTeacherModel.find(
      (t) => t.id === id
    );
    if (teacher) {
      this.teacherForm = { ...teacher };
    }
  }

  Onsubmit() {
    if (this.editMode) {
      this.teacherDataServiceService.updateTeacher(this.teacherForm);
    } else {
      this.teacherDataServiceService.update(this.teacherForm);
    }
    this.router.navigate(['teacherList']);
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
