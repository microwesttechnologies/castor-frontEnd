import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee.Model';
import { CreateEmployeeGateway } from '../Gateway/CreateEmployee.Gateway';

@Injectable({
  providedIn: 'root',
})
export class CreateEmployeeUseCases {
  constructor(private _employeeCreateGateway: CreateEmployeeGateway) {}

  createEmployee(employee: Employee): Observable<Object> {
    return this._employeeCreateGateway.create(employee);
  }
}
