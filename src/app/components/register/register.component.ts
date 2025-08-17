import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  employees = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })
  register() {
    this.service.register(this.employees.value).subscribe({
      next: () => {
        alert("Registration successful!, welcome !" + this.employees.value.name);
        window.location.href = '/login';
      },
      error: (err) => {
        alert("Registration failed, please try again.");
        console.error("Registration failed:", err)
      }
    })
  }
}
