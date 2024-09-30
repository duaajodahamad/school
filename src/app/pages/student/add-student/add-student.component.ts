import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { StudentApiService } from './../../../services/student-services/student-api.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private studentApiService: StudentApiService
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: [0, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      city: [''],
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.editMode = true;
        this.getStudentById(Number(id));
      }
    });
  }

  getStudentById(id: number) {
    // Use the API service to fetch student details by ID
    this.studentApiService.getStudentById(id).subscribe((student) => {
      this.studentForm.patchValue({
        id: student.id,
        name: student.name,
        email: student.email,
        phoneNumber: student.phoneNumber,
        city: student.city,
      });
    });
  }

  Onsubmit() {
    if (this.editMode) {
      this.studentApiService
        .updateStudent(this.studentForm.value)
        .subscribe(() => {
          this.router.navigate(['studentList']);
        });
    } else {
      this.studentApiService
        .addStudent(this.studentForm.value)
        .subscribe(() => {
          this.router.navigate(['studentList']);
        });
    }
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
