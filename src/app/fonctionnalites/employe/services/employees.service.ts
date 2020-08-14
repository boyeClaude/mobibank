import { EmployeeStore } from '../state/employees.store';
import { IEmployee } from '../model/employee.model';
import { Injectable } from '@angular/core';
import { EmployeesQuery } from '../state/employees.query';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(
    private employeeStore: EmployeeStore,
    private employeeQuery: EmployeesQuery,
    private formBuilder: FormBuilder
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

  initialiserForm(): FormGroup {
    let myFormGroup: FormGroup;
    myFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      prenoms: ['', Validators.required],
      email: ['', Validators.required],
      salaire: ['', Validators.required],
      lieuDeResidence: ['', Validators.required],
      contacts: this.formBuilder.array([]),
    });

    return myFormGroup;
  }
}
