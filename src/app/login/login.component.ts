import { Subscription } from 'rxjs';
import { AppComponent } from './../app.component';
import { Component, Input } from '@angular/core';
import { LoginModle } from './../Models/login.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Auth } from '../Models/authModel';
import { AuthService } from '../services/auth.service';

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

  authObj: Auth = { email: '', password: '' };

  userName: string = '';
  password: string = '';
  constructor(
    private appComponent: AppComponent,
    private authService: AuthService,
    private loginService: LoginService
  ) {}

  login() {
    // console.log(this.userName);
    // console.log(this.password);
    // alert("login");
    //this.showLogin.islogin = !this.showLogin.islogin;
    //this.appComponent.islogin = !this.appComponent.islogin;
  }

  onSummit() {
    // this.loginService.login({
    //   email:this.userName,
    //   password:this.password
    // }).subscribe((c:any)=>{
    // localStorage.setItem("islogin","true");
    // localStorage.setItem("token",c.token);
    // this.showLogin.islogin = !this.showLogin.islogin;
    // });
    this.authService
      .login({ email: this.userName, password: this.password })
      .subscribe((c:any) => {
        localStorage.setItem('islogin', 'true');
        localStorage.setItem('token', c.access_token);
        localStorage.setItem('refresh_token', c.refresh_token);
        console.log(c.access_token);
        console.log(c.refresh_token); 
        this.showLogin.islogin = !this.showLogin.islogin;
      });
  }
}
