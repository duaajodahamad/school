import { Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { MainpageComponent } from './mainpage/mainpage.component';

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
];
