import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  AsyncValidatorFn,
} from '@angular/forms';
import { StudentApiService } from './../../../services/student-services/student-api.service';
import { debounceTime, map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-phone-number',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './check-phone-number.component.html',
  styleUrls: ['./check-phone-number.component.css'],
})
export class CheckPhoneNumberComponent implements OnInit {
  phoneForm!: FormGroup;
  studentInfo: any = null;
  phoneNotFound = false;

  constructor(
    private fb: FormBuilder,
    private studentApiService: StudentApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.phoneForm = this.fb.group({
      phoneNumber: [
        '',
        [Validators.required, Validators.minLength(9)],
        [this.checkPhoneNumber()],
      ],
    });
    this.phoneForm
      .get('phoneNumber')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {
        if (value.length < 9) {
          this.studentInfo = null;
          this.phoneNotFound = false;
        }
      });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  checkPhoneNumber(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      if (control.value.length < 9) {
        this.phoneNotFound = false;
        this.studentInfo = null;
        return of(null);
      }
      return this.studentApiService.checkPhoneNumber(control.value).pipe(
        map((student) => {
          if (student) {
            this.studentInfo = student;
            this.phoneNotFound = false;
            return null;
          } else {
            this.studentInfo = null;
            this.phoneNotFound = true;
            return { phoneNotFound: true };
          }
        }),
        catchError(() => {
          this.studentInfo = null;
          this.phoneNotFound = true;
          return of({ phoneNotFound: true });
        })
      );
    };
  }
}
