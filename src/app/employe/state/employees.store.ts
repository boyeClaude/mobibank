import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IEmployee } from './employee.model';
import { Injectable } from '@angular/core';

export interface EmployeeState extends EntityState<IEmployee> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'employees' })
export class EmployeeStore extends EntityStore<EmployeeState> {
  constructor() {
    super();
  }
}
