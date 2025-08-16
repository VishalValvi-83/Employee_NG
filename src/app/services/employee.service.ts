import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  login(userData: any): Observable<any> {
    if (!userData.email || !userData.password) {
      throw new Error('Email and password are required');
    }
    return this.http.post("http://localhost:8080/login", userData)

  }

  register(userData: any): Observable<any> {
    if (!userData.password) {
      throw new Error('Password is required');
    }
    if (!userData.name) {
      throw new Error('Name is required');
    }
    if (!userData.email) {
      throw new Error('Email is required');
    }
    return this.http.post("http://localhost:8080/register", userData)

  }
}
