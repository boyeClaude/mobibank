import { EntityState, EntityStore, StoreConfig, ID } from '@datorama/akita';
import { IEmployee } from '../model/employee.model';
import { Injectable } from '@angular/core';

export interface EmployeeState extends EntityState<IEmployee, number> {}

// export function createInitialState(): EmployeeState {
//   return [];
// }

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'employees' })
export class EmployeeStore extends EntityStore<EmployeeState> {
  constructor() {
    super();
  }
}
