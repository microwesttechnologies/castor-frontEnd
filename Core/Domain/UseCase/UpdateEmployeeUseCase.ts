import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../Model/Employee.Model";
import { UpdateEmployeeGateway } from "../Gateway/UpdateDEmployee.Gateway ";

@Injectable({
    providedIn: 'root'
})

export class UpdateEmployeeUseCases {
    constructor(
        private _updateEmployeeGateway: UpdateEmployeeGateway
    ) {}
    
    updateEmployee(id: number, updatedEmployeeData: any): Observable<Employee> {
        return this._updateEmployeeGateway.updateEmployee(id, updatedEmployeeData);
    }
}
