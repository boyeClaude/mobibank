import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ListEmployeeComponent } from './employe/list-employee/list-employee.component';
// import { AddEmployeeComponent } from './employe/add-employee/add-employee.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateEmployeePageModule } from './pages/create-employee/create-employee.page.module';
import { CreateEmployeePageComponent } from './pages/create-employee/create-employee.page.component';
import { ListEmployeePageModule } from './pages/list-employee/list-employee.page.module';
import { ListEmployeePageComponent } from './pages/list-employee/list-employee.page.component';
// import { AddEmployeeComponent } from './fonctionnalites/employe/add-employee/add-employee.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'create-employee', component: CreateEmployeePageComponent },
  { path: 'list-employee', component: ListEmployeePageComponent },
  { path: 'edit/:id', component: CreateEmployeePageComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [
    CreateEmployeePageModule,
    ListEmployeePageModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
