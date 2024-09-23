import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-semester',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-semester.component.html',
  styleUrl: './add-semester.component.css',
})
export class AddSemesterComponent implements OnInit {

  semesterForm: FormGroup  ;
  constructor(private fb: FormBuilder) {  
    this.semesterForm =this.fb.group({
      id:[''],
      name:['']
     });
   }

 ngOnInit(): void {
  //  this.createForm();
 }

  createForm(){
     this.semesterForm =this.fb.group({
      id:[''],
      name:['']
     });
  }

  save(){
    console.log(this.semesterForm.value);
  }

}
