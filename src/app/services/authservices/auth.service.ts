import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api';


  constructor(
    private http:HttpClient
    ) { }


  signup(data) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }



  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/password/email`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/password/reset`, data)
  }

}
