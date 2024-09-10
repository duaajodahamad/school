import { AppComponent } from './../app.component';
import { Component, Input } from '@angular/core';
import {LoginModle} from './../Models/login.model';
import { FormsModule  } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input() showLogin: any;

  loginObj: LoginModle = { userName: '', password: '' };
  userName:string = "";
  password:string = "";
  constructor(private appComponent: AppComponent) {}

  login() {
   
    console.log(this.userName);
    console.log(this.password); 
    alert("login");

    this.showLogin.islogin = !this.showLogin.islogin;
    //this.appComponent.islogin = !this.appComponent.islogin;
  }

  onSummit(){
 
    this.showLogin.islogin = !this.showLogin.islogin;
  }

}
