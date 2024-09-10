import { AppComponent } from './../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
 constructor(private appComponent:AppComponent)
 {

 }
   

 login(){
  this.appComponent.islogin = !this.appComponent.islogin;
 }

}
