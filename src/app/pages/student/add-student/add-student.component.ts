import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { StudnetModel } from '../../../Models/student.modle';
import { StudentdataService } from '../../../services/studentdata.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit    {
  studentForm: StudnetModel = {
    email: '',
    Name: '',
    stId: 0,
    phone: '',
  };
  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public studentService: StudentdataService
  ) {}
 
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.editMode = true;
        this.getStudentById(Number(id));
      }
    });
  }

  getStudentById(id: number) {
    const student = this.studentService.sourceStudentModel.find(
      (s) => s.stId === id
    );
    if (student) {
      this.studentForm = { ...student };
    }
  }

  Onsubmit() {
    if (this.editMode) {
      this.studentService.updateStudent(this.studentForm);
    } else {
      this.studentService.update(this.studentForm);
    }
    this.router.navigate(['studentlist']);
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
