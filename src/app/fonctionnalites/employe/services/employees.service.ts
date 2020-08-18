import { EmployeeStore } from '../state/employees.store';
import { IEmployee } from '../model/employee.model';
import { Injectable } from '@angular/core';
import { EmployeesQuery } from '../state/employees.query';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ICreateData } from 'src/app/core/interfaces/forms/creation-data';
import { IInitialisationData } from 'src/app/core/interfaces/forms/initialisation-data';
import { IDeleteData } from 'src/app/core/interfaces/lists/delete-data';

@Injectable({ providedIn: 'root' })
export class EmployeeService
  implements ICreateData, IInitialisationData<IEmployee>, IDeleteData {
  constructor(
    private employeeStore: EmployeeStore,
    private employeeQuery: EmployeesQuery,
    private formBuilder: FormBuilder
  ) {}

  createData(employee: IEmployee) {
    const id = this.employeeStore._value().ids.length + 1;
    employee.id = id;
    this.employeeStore.add(employee);
  }

  getDataById(id: number) {
    return this.employeeQuery.getEntity(id);
  }

  updateEmployee(id: number, employee: IEmployee) {
    this.employeeStore.update(id, employee);
  }

  dataToBeDeleted(id: number) {
    this.employeeStore.remove(id);
  }

  initialisationData(datas?: IEmployee): FormGroup {
    let myFormGroup: FormGroup;

    const contactsArray = this.formBuilder.array([]);

    if (datas && datas.contacts && datas.contacts.length > 0) {
      datas.contacts.forEach((contact, index) => {
        contactsArray.push(new FormControl(contact));
      });
    }

    const data: IEmployee = {
      id: datas && datas.id ? datas.id : null,
      nom: datas && datas.nom ? datas.nom : null,
      prenoms: datas && datas.prenoms ? datas.prenoms : null,
      email: datas && datas.email ? datas.email : null,
      salaire: datas && datas.salaire ? datas.salaire : null,
      lieuDeResidence:
        datas && datas.lieuDeResidence ? datas.lieuDeResidence : null,
    };

    myFormGroup = this.formBuilder.group({
      id: data.id,
      nom: data.nom,
      prenoms: data.prenoms,
      email: data.email,
      salaire: data.salaire,
      lieuDeResidence: data.lieuDeResidence,
      contacts: contactsArray,
      // nom: ['', Validators.required],

      // this.formGroup.setControl(
      //   'contacts',
      //   this._fb.array(this.myEmployee.contacts || [])
      // );
      // prenoms: ['', Validators.required],
      // email: ['', Validators.required],
      // salaire: ['', Validators.required],
      // lieuDeResidence: ['', Validators.required],
      // contacts: this.formBuilder.array([]),
    });

    myFormGroup.patchValue({
      id: data.id,
      nom: data.nom,
      prenoms: data.prenoms,
      email: data.email,
      salaire: data.salaire,
      lieuDeResidence: data.lieuDeResidence,
      // contacts: contactsArray,
    });

    return myFormGroup;
  }
}
