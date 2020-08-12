import { EmployeeStore } from '../state/employees.store';
import { IEmployee } from '../model/employee.model';
import { Injectable } from '@angular/core';
import { EmployeesQuery } from '../state/employees.query';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(
    private employeeStore: EmployeeStore,
    private employeeQuery: EmployeesQuery
  ) {}

  createEmployee(employee: IEmployee) {
    const id = this.employeeStore._value().ids.length + 1;
    employee.id = id;
    this.employeeStore.add(employee);
  }

  getEmployeeById(id: number) {
    return this.employeeQuery.getEntity(id);
  }

  updateEmployee(id: number, employee: IEmployee) {
    this.employeeStore.update(id, employee);
  }

  deleteEmployee(id: number) {
    this.employeeStore.remove(id);
  }
}
