import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'Core/Config/Enviroment';
import { Employee } from 'Core/Domain/Model/Employee.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateEmployeeService {
  constructor(private http: HttpClient) {}

  updateEmployee(id: number, updatedEmployeeData: Employee): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<any>(`${environment.apiUrl}Update`, updatedEmployeeData, httpOptions);
  }
}
