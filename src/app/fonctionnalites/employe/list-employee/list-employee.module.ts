import { NgModule } from '@angular/core';

import { ListEmployeeComponent } from './list-employee.component';
import { CommonModule } from '@angular/common';
import { AddEmployeeModule } from '../add-employee/add-employee.module';

@NgModule({
  imports: [CommonModule, AddEmployeeModule],
  exports: [ListEmployeeComponent],
  declarations: [ListEmployeeComponent],
  providers: [],
})
export class ListEmployeeModule {}
