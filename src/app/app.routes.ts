import { Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { CourseComponent } from './pages/course/course/course.component';
import { AddCourseComponent } from './pages/course/add-course/add-course.component';
import { TeacherListComponent } from './pages/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';

export const routes: Routes = [
  {
    path: '',
    // redirectTo:'main',
    component: MainpageComponent,
  },
  //   {
  //     path: 'main',
  //     component: MainpageComponent,
  //   },
  {
    path: 'studentlist',
    component: StudentListComponent,
  },
  {
    path:'add-student',
    component:AddStudentComponent
  },
  {
    path: 'courseList',
    component: CourseComponent,
  },
  {
    path:'add-course',
    component:AddCourseComponent
  },
  {
    path:'teacher-list',
    component:TeacherListComponent
  },
  {
    path:'add-teacher',
    component:AddTeacherComponent
  }
];
