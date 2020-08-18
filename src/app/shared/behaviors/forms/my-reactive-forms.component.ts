import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/fonctionnalites/employe/services/employees.service';
import { IDeleteData } from 'src/app/core/interfaces/lists/delete-data';
import { IUpdateData } from 'src/app/core/interfaces/forms/update-data';
import { IGetDataById } from 'src/app/core/interfaces/get-data-byId';
import { ICreateData } from 'src/app/core/interfaces/forms/creation-data';
import { IEmployee } from 'src/app/fonctionnalites/employe/model/employee.model';
import { Autowired } from '@angular-ru/autowired';
import { IInitialisationData } from 'src/app/core/interfaces/forms/initialisation-data';

@Component({
  selector: 'app-my-reactive-form',
  template: '',
})
export class MyReactiveFormsComponent<M> implements OnInit {
  // @Autowired() fb: FormBuilder;
  // @Autowired() router: Router;
  formGroup: FormGroup;
  // dataCreation: ICreateData;
  // dataUpdate: IUpdateData;
  // initialisationForm: IInitialisationData;
  protected dataCreation: ICreateData;
  dataUpdate: IUpdateData;
  protected initialisationForm: IInitialisationData<M>;
  protected getTheDataById: IGetDataById;
  pageTitle: string;
  myData: M;
  title: string;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formGroup = this.initialisationForm.initialisationData();

    //Read the employee Id from the route
    this.route.paramMap.subscribe((params) => {
      const empId = +params.get('id');
      if (empId) {
        this.getMyEmployee(empId);
      }
    });
  }

  clearForm() {
    this.formGroup.reset();
  }

  getMyEmployee(id: number) {
    let myEmpId = this.getTheDataById.getDataById(id);
    this.editMyEmployee(myEmpId);
  }

  // editMyEmployee(data: M) {}
  editMyEmployee(data: M) {
    if (this.formGroup) {
      this.formGroup.reset();
    }
    // this.myData = data;
    // if (this.myData.?id === 0) {
    //   this.title = 'Add Employee';
    // } else {
    //   this.title = `Edit Product: ${this.myData?.nom}`;
    // }
    // update data on the form
    // this.formGroup.patchValue({
    //   nom: employee.nom,
    //   prenoms: employee.prenoms,
    //   email: employee.email,
    //   salaire: employee.salaire,
    //   lieuDeResidence: employee.lieuDeResidence,
    this.formGroup = this.initialisationForm.initialisationData(data);
    // });
    // this.formGroup.setControl(
    //   'contacts',
    //   this._fb.array(this.myEmployee.contacts || [])
    // );
  }

  onSubmit() {
    if (this.formGroup.valid) {
      if (this.formGroup.dirty) {
        const result = { ...this.myData, ...this.formGroup.value };
        if (!result.id) {
          this.dataCreation.createData(result);
        } else {
          this.dataUpdate.updateData(result.id, result);
        }
        this.onSaveComplete();
      }
    }
  }

  onSaveComplete() {
    this.clearForm();
  }
}
