import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  StudnetBackEndModel,
  StudnetModel,
} from '../../../Models/student.modle';
import { StudentdataService } from '../../../services/studentdata.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StudentApiService } from '../../../services/student-services/student-api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnChanges, OnDestroy {
  title: string = 'Student List';
  sudentSoucrReference: any;
  @Input() students: StudnetBackEndModel[] = [];
  test!: string;
  displayedColumns: string[] = ['stId', 'Name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<StudnetBackEndModel>(this.students);

  constructor(
    public studentservice: StudentdataService,
    private router: Router,
    private studentApiService: StudentApiService
  ) {}

  ngOnDestroy(): void {
    //this.sudentSoucrReference.unsubscribe();
  }

  ngOnInit() {
    this.studentApiService.getStudents().subscribe((c) => {
      this.students = c;
      this.dataSource.data = c;
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
    this.studentApiService.deleteStudent(id).subscribe((c) => {
      this.students = this.students.filter((x) => x.id !== id);
      this.dataSource.data = this.students;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  search() {
    this.studentservice.search(this.test);
  }
}
