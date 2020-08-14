import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/fonctionnalites/employe/services/employees.service';
import { IDeleteData } from 'src/app/core/interfaces/forms/delete-data';
import { IUpdateData } from 'src/app/core/interfaces/forms/update-data';
import { IGetDataById } from 'src/app/core/interfaces/get-data-byId';
import { ICreateData } from 'src/app/core/interfaces/forms/creation-data';
import { IEmployee } from 'src/app/fonctionnalites/employe/model/employee.model';

@Component({
  selector: 'app-my-reactive-form',
  template: '',
})
export class MyReactiveFormsComponent<M> implements OnInit {
  formGroup: FormGroup;
  dataCreation: ICreateData;
  // dataDeletion: IDeleteData;
  dataUpdate: IUpdateData;
  // dataGetById: IGetDataById;
  myData: M;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  // deleteData() {}
  // updateData() {}
  // getDataById() {}
  // createData() {}

  //Read the employee Id from the route
  // this.route.paramMap.subscribe((params) => {
  //   const empId = +params.get('id');
  //   if (empId) {
  //     this.getMyEmployee(empId);
  //   }
  // });

  clearForm() {
    this.formGroup.reset();
  }

  getMyEmployee(id: number) {
    // let myEmpId = this.dataGetById.getDataById(id);
    // this.editMyEmployee(myEmpId);
  }

  editMyEmployee() {}

  onSubmit() {
    if (this.formGroup.valid) {
      if (this.formGroup.dirty) {
        const result = { ...this.myData, ...this.formGroup.value };
        if (!result.id) {
          // this.employeeService.createEmployee(result);
          this.dataCreation.createData(result);
        } else {
          this.dataUpdate.updateData(result.id, result);
          // this.employeeService.updateEmployee(result);
        }
        this.onSaveComplete();
      }
    }
  }

  onSaveComplete() {
    this.clearForm();
  }
}
