import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

import { EmployeeService } from '../services/employees.service';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IEmployee } from '../model/employee.model';
import { MyReactiveFormsComponent } from 'src/app/shared/behaviors/forms/my-reactive-forms.component';
import { Autowired } from '@angular-ru/autowired';

@Component({
  selector: 'app-add-employee',
  templateUrl: 'add-employee.component.html',
})
export class AddEmployeeComponent extends MyReactiveFormsComponent<IEmployee>
  implements OnInit {
  // @Autowired() fb: FormBuilder;
  // @Autowired() dataCreation: EmployeeService;
  // @Autowired() getDataById: EmployeeService;
  // @Autowired() initialisationForm: EmployeeService;
  // @Autowired() router: Router;
  // @Autowired() route: ActivatedRoute;

  pageTitle = 'Add Employee';
  myEmployee: IEmployee;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    protected dataCreation: EmployeeService,
    getDataById: EmployeeService,
    protected initialisationForm: EmployeeService,
    protected route: ActivatedRoute
  ) {
    super(fb, router, route);
  }

  clearForm() {
    this.formGroup.reset();
  }

  get contacts() {
    try {
      return this.formGroup.get('contacts') as FormArray;
    } catch (e) {
      console.log(e);
    }
  }

  addContact() {
    this.contacts.push(this.fb.control(''));
  }

  deleteContact(index: number): void {
    this.contacts.removeAt(index);
    this.contacts.markAsDirty();
  }

  // getMyEmployee(id: number) {
  //   let myEmpId = this.employeeService.getEmployeeById(id);
  //   this.editMyEmployee(myEmpId);
  // }

  // editMyEmployee(employee: IEmployee) {
  //   if (this.formGroup) {
  //     this.formGroup.reset();
  //   }

  //   this.myEmployee = employee;

  //   if (this.myEmployee.id === 0) {
  //     this.pageTitle = 'Add Employee';
  //   } else {
  //     this.pageTitle = `Edit Product: ${this.myEmployee.nom}`;
  //   }

  //   // update data on the form
  //   this.formGroup.patchValue({
  //     nom: employee.nom,
  //     prenoms: employee.prenoms,
  //     email: employee.email,
  //     salaire: employee.salaire,
  //     lieuDeResidence: employee.lieuDeResidence,
  //   });

  //   this.formGroup.setControl(
  //     'contacts',
  //     this.fb.array(this.myEmployee.contacts || [])
  //   );
  // }

  onSaveComplete() {
    // this.formGroup.reset();
    super.onSaveComplete();
    this.router.navigateByUrl('/list-employee');
  }
}
