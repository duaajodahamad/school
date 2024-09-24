import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SemesterDataService, SemesterModel } from '../../../services/semester-data.service';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class SemesterListComponent implements OnInit {
  semesters: SemesterModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'action'];
  dataSource = new MatTableDataSource<SemesterModel>(this.semesters);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteSemester(semester: SemesterModel): void {
    this.semesterDataService.deleteSemester(semester);
  }
}
