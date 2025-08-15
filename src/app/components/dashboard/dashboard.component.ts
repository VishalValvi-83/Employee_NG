import { Component, OnInit } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];

  ngOnInit(): void {
    // Mock employee data for now
    this.employees = [
      { id: 1, name: 'Vishal Valvi', position: 'Software Engineer', email: 'vishal@example.com' },
      { id: 2, name: 'Anita Sharma', position: 'HR Manager', email: 'anita@example.com' },
      { id: 3, name: 'Rahul Mehta', position: 'Team Lead', email: 'rahul@example.com' },
      { id: 4, name: 'Priya Nair', position: 'UI/UX Designer', email: 'priya@example.com' }
    ];
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employees = this.employees.filter(emp => emp.id !== id);
    }
  }
}
