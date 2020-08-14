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

@Component({
  selector: 'app-add-employee',
  templateUrl: 'add-employee.component.html',
})
export class AddEmployeeComponent implements OnInit {
  pageTitle = 'Add Employee';
  employeeForm: FormGroup;
  myEmployee: IEmployee;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.employeeForm = this.fb.group({
    //   nom: ['', Validators.required],
    //   prenoms: ['', Validators.required],
    //   email: ['', Validators.required],
    //   salaire: ['', Validators.required],
    //   lieuDeResidence: ['', Validators.required],
    //   contacts: this.fb.array([]),
    // });

    this.employeeForm = this.employeeService.initialiserForm();

    //Read the employee Id from the route
    this.route.paramMap.subscribe((params) => {
      const empId = +params.get('id');
      if (empId) {
        this.getMyEmployee(empId);
      }
    });
  }

  clearForm() {
    this.employeeForm.reset();
  }

  get contacts() {
    return this.employeeForm.get('contacts') as FormArray;
  }

  addContact() {
    this.contacts.push(this.fb.control(''));
  }

  deleteContact(index: number): void {
    this.contacts.removeAt(index);
    this.contacts.markAsDirty();
  }

  getMyEmployee(id: number) {
    let myEmpId = this.employeeService.getEmployeeById(id);
    this.editMyEmployee(myEmpId);
  }

  editMyEmployee(employee: IEmployee) {
    if (this.employeeForm) {
      this.employeeForm.reset();
    }

    this.myEmployee = employee;

    if (this.myEmployee.id === 0) {
      this.pageTitle = 'Add Employee';
    } else {
      this.pageTitle = `Edit Product: ${this.myEmployee.nom}`;
    }

    // update data on the form
    this.employeeForm.patchValue({
      nom: employee.nom,
      prenoms: employee.prenoms,
      email: employee.email,
      salaire: employee.salaire,
      lieuDeResidence: employee.lieuDeResidence,
    });

    this.employeeForm.setControl(
      'contacts',
      this.fb.array(this.myEmployee.contacts || [])
    );
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.employeeForm.dirty) {
        const result = { ...this.myEmployee, ...this.employeeForm.value };
        if (!result.id) {
          this.employeeService.createEmployee(result);
        } else {
          this.employeeService.updateEmployee(result.id, result);
        }
        this.onSaveComplete();
      }
    }
  }

  onSaveComplete() {
    this.employeeForm.reset();
    this.router.navigateByUrl('/list-employee');
  }
}
