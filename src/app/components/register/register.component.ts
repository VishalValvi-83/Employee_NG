import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: EmployeeService) {

  }

  userData = {
    name: '',
    email: '',
    password: ''
  }

  register() {
    this.service.register(this.userData).subscribe({
      next: (user) => {
        alert("Registration successful!, welcome " + this.userData.name);
        window.location.href = '/login';
      },
      error: (err) => console.error("Registration failed:", err)
    })
  }
}
