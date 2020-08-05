import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

import { EmployeeService } from '../state/employees.service';

@Component({
  selector: 'add-employee',
  templateUrl: 'add-employee.component.html',
})
export class AddEmployeeComponent implements OnInit {
  employeeForm = this.fb.group({
    nom: ['', Validators.required],
    prenoms: ['', Validators.required],
    email: ['', Validators.required],
    salaire: ['', Validators.required],
    lieuDeResidence: ['', Validators.required],
    contacts: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {}

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

  onSubmit() {
    const result = this.employeeForm.value;
    console.log(result);
    this.employeeService.addEmployee(result);
    this.clearForm();
  }
}
