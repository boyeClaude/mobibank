import { EmployeeStore } from './employees.store';
import { IEmployee } from './employee.model';
import { Injectable } from '@angular/core';
import { EmployeesQuery } from './employees.query';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(
    private employeeStore: EmployeeStore,
    private employeeQuery: EmployeesQuery
  ) {}

  private createEmployee({
    id,
    nom,
    prenoms,
    email,
    salaire,
    lieuDeResidence,
    contact,
  }: Partial<IEmployee>) {
    return {
      id,
      nom,
      prenoms,
      email,
      salaire,
      lieuDeResidence,
      contact,
    };
  }

  displayEmployee() {
    return this.employeeQuery.selectAll();
  }

  addEmployee(employee: Partial<IEmployee>) {
    const myEmployeeCreate = this.createEmployee(employee);
    this.employeeStore.add(myEmployeeCreate);
  }

  deleteEmployee(id: string) {
    this.employeeStore.remove(id);
  }
}
