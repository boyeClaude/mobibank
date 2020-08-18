import { NgModule } from '@angular/core';

import { AddEmployeeComponent } from './add-employee.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyReactiveFormsModule } from 'src/app/shared/behaviors/forms/my-reactive-forms.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MyReactiveFormsModule],
  exports: [AddEmployeeComponent],
  declarations: [AddEmployeeComponent],
  providers: [],
})
export class AddEmployeeModule {}
