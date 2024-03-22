import { Injectable } from '@angular/core';
import { GetAllEmployeeGateway } from '../Gateway/GetAllEmployee.Gateway';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee.Model';


@Injectable({
  providedIn: 'root',
})
export class GetEmployeeUseCases {
  constructor(private _employeeGateway: GetAllEmployeeGateway) {}

  getAllEmployee(): Observable<Array<Employee>> {
    return this._employeeGateway.getAll();
  }
}
