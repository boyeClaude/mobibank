import { NgModule } from '@angular/core';

import { ListEmployeePageComponent } from './list-employee.page.component';
import { ListEmployeeModule } from 'src/app/fonctionnalites/employe/list-employee/list-employee.module';

@NgModule({
  imports: [ListEmployeeModule],
  exports: [ListEmployeePageComponent],
  declarations: [ListEmployeePageComponent],
  providers: [],
})
export class ListEmployeePageModule {}
