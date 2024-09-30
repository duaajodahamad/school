import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../Models/authModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //send post request to login
  login(auth: Auth) {
    return this.http.post('https://api.escuelajs.co/api/v1/auth/login', auth);
  }

  //to get teh login user information
  getUserInfo() {
   let token= localStorage.getItem('token')
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: { "Authorization": "Bearer  "+token },
    });
  }
}
