import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EmployeeStore, EmployeeState } from './employees.store';
import { IEmployee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesQuery extends QueryEntity<EmployeeState, IEmployee> {
  constructor(protected store: EmployeeStore) {
    super(store);
  }
}
