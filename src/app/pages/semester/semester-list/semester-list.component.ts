import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SemesterDataService, SemesterModel } from '../../../services/semester-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SemesterListComponent implements OnInit {
  semesters: SemesterModel[] = [];
  title: string = 'Semester List';
  constructor(private router: Router, private semesterDataService: SemesterDataService) {}

  ngOnInit(): void {
    this.semesterDataService.dataSource.subscribe((data) => {
      this.semesters = data;
    });
  }

  navigateTo(route: string, id?: number): void {
    if (id !== undefined) {
      this.router.navigate([`/${route}`, id]);
    } else {
      this.router.navigate([`/${route}`]);
    }
  }

  deleteSemester(semester: SemesterModel): void {
    this.semesterDataService.deleteSemester(semester);
  }
}
