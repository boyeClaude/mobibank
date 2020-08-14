import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employees.service';
import { EmployeesQuery } from '../state/employees.query';
import { Observable, Subscription } from 'rxjs';
import { IEmployee } from '../model/employee.model';
import { ID } from '@datorama/akita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: 'list-employee.component.html',
})
export class ListEmployeeComponent implements OnInit {
  listEmployees$: Observable<IEmployee[]>;
  deleteEmployeeSub: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private employeeQuery: EmployeesQuery,
    private router: Router
  ) {}

  ngOnInit() {
    this.listEmployees$ = this.employeeQuery.selectAll();
  }

  editEmployee(employeeId?: number) {
    this.router.navigate(['/edit', employeeId]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }
}
