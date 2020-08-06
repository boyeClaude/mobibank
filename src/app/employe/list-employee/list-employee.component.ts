import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../state/employees.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'list-employee',
  templateUrl: 'list-employee.component.html',
})
export class ListEmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  displayListEmployee() {
    this.employeeService.displayEmployee();
  }
}
