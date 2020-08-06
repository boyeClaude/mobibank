import { Injectable } from '@angular/core';
import { QueryEntity, queryConfigKey } from '@datorama/akita';
import { EmployeeStore, EmployeeState } from './employees.store';
import { IEmployee } from './employee.model';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root',
})
export class EmployeesQuery extends QueryEntity<EmployeeState> {
  listEmployee = this.getAll();
  constructor(protected store: EmployeeStore) {
    super(store);
  }
}
