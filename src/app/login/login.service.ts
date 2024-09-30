import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from '../Models/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(loginModel:loginModel){
    return this.http.post('https://localhost:7194/api/Account/login',loginModel) ;
  }
}
