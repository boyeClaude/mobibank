import { NgModule } from '@angular/core';

import { AddEmployeeComponent } from './add-employee.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddEmployeeComponent],
  declarations: [AddEmployeeComponent],
  providers: [],
})
export class AddEmployeeModule {}
