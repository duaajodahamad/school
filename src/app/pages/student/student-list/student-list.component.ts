import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StudnetModel } from '../../../Models/student.modle';
import { StudentdataService } from '../../../services/studentdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  title: string = 'Student List';

  @Input() students: StudnetModel[] = [];

  constructor(
    public studentservice: StudentdataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentservice.students.subscribe((c) => {
      this.students = c;
    });
  }

  navigateTo(route: string, id?: number) {
    if (id !== undefined) {
      this.router.navigate([`/${route}`, id]);
    } else {
      this.router.navigate([`/${route}`]);
    }
  }

  deleteStudent(id: number) {
    this.studentservice.deleteStudent(id);
  }
}
