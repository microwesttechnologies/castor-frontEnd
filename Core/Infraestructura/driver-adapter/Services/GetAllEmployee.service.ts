import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllEmployeeGateway } from 'Core/Domain/Gateway/GetAllEmployee.Gateway';
import { Employee } from 'Core/Domain/Model/Employee.Model';
import { Observable } from 'rxjs';
import { environment } from 'Core/Config/Enviroment';

@Injectable({
  providedIn: 'root',
})
export class GetAllEmployeeService extends GetAllEmployeeGateway {
  constructor(private http: HttpClient) {
    super();
  }
  
  override getAll(): Observable<Employee[]> {
    return this.http.get<Array<Employee>>(environment.apiUrl+'Get-All');
  }

}
