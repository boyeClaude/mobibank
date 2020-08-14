import { NgModule } from '@angular/core';
import { AddEmployeeModule } from 'src/app/fonctionnalites/employe/add-employee/add-employee.module';
import { CreateEmployeePageComponent } from './create-employee.page.component';

@NgModule({
  imports: [AddEmployeeModule],
  exports: [CreateEmployeePageComponent],
  declarations: [CreateEmployeePageComponent],
  providers: [],
})
export class CreateEmployeePageModule {}
