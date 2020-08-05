import { EmployeeStore } from './employees.store';
import { IEmployee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private employeeStore: EmployeeStore) {}

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

  addEmployee(employee: Partial<IEmployee>) {
    const myEmployeeCreate = this.createEmployee(employee);
    this.employeeStore.add(myEmployeeCreate);
  }

  deleteEmployee(id: string) {
    this.employeeStore.remove(id);
  }
  //   private createEmployee(myEmployee: Partial<IEmployee>) {
  //     return myEmployee;
  //   }
}
