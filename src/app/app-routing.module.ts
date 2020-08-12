import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employe/list-employee/list-employee.component';
import { AddEmployeeComponent } from './employe/add-employee/add-employee.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit/:id', component: AddEmployeeComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
