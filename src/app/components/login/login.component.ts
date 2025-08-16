import { EmployeeService } from './../../services/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: EmployeeService) { }
  userData = {
    email: '',
    password: ''
  };
  login() {
    this.service.login(this.userData).subscribe({
      next: (user) => {
        alert("Login successful!, welcome " + user.name);
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/welcome';
      },
      error: (err) => console.error("Login failed:", err)
    })
  }
}
