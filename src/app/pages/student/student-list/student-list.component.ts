import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StudnetModel } from '../../../Models/student.modle';
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
  @Input() students: StudnetModel[] = [];
  test!: string;
  displayedColumns: string[] = ['stId', 'Name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<StudnetModel>(this.students);

  constructor(
    public studentservice: StudentdataService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.sudentSoucrReference.unsubscribe();
  }

  ngOnInit() {
    // this.sudentSoucrReference = this.studentservice.students.subscribe((c) => {
    //   this.students = c;
    //   this.dataSource.data = c;
    // });

    this.studentservice.getStudent().subscribe((c:any)=>{
      console.log(c);
      for (let index = 0; index < (<any[]>c).length; index++) {
        let stuendt:StudnetModel = {
          stId: c[index].id,
          Name: c[index].name,
          email: c[index].name + '@gmail.com',
          phone: c[index].dob,
        };
        this.students.push(stuendt);
        this.dataSource.data.push(stuendt);
      } 
      console.log(this.students);
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

  ngOnChanges(changes: SimpleChanges): void {}

  search() {
    this.studentservice.search(this.test);
  }
}
