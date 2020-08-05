import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  template: '',
})
export class MyReactiveFormsComponent implements OnInit {
  myform = this.fb.group({
    nom: [''],
    prenoms: [''],
    email: [''],
    salaire: [''],
    lieuDeResidence: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.clearForm();
  }

  clearForm() {
    this.myform.reset();
  }
}
