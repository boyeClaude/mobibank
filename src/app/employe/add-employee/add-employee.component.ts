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

@Component({
  selector: 'add-employee',
  templateUrl: 'add-employee.component.html',
})
export class AddEmployeeComponent implements OnInit {
  pageTitle = 'Add Employee';
  employeeForm: FormGroup;
  myEmployee: IEmployee;
  // employeeForm = this.fb.group({
  //   nom: ['', Validators.required],
  //   prenoms: ['', Validators.required],
  //   email: ['', Validators.required],
  //   salaire: ['', Validators.required],
  //   lieuDeResidence: ['', Validators.required],
  //   contacts: this.fb.array([]),
  // });

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      nom: ['', Validators.required],
      prenoms: ['', Validators.required],
      email: ['', Validators.required],
      salaire: ['', Validators.required],
      lieuDeResidence: ['', Validators.required],
      contacts: this.fb.array([]),
    });

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
    const result = this.employeeForm.value;
    console.log(result);
    this.employeeService.createEmployee(result);
    this.clearForm();
    this.router.navigateByUrl('/list-employee');
  }
}
