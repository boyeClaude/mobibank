import { Component, OnInit } from '@angular/core';
import { Autowired } from '@angular-ru/autowired';
import { EmployeesQuery } from 'src/app/fonctionnalites/employe/state/employees.query';
import { Observable } from 'rxjs';
import { IDeleteData } from 'src/app/core/interfaces/lists/delete-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-elements',
  template: '',
})
export class ListElementsComponent implements OnInit {
  // @Autowired() employeeQuery: EmployeesQuery;
  // @Autowired() router: Router;
  protected deleteElement: IDeleteData;
  constructor(protected router: Router) {}

  ngOnInit() {}

  editData(employeeId?: number) {
    this.router.navigate(['/edit', employeeId]);
  }

  deleteData(id: number) {
    this.deleteElement.dataToBeDeleted(id);
  }
}
