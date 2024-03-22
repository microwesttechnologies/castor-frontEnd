import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../Model/Employee.Model";
import { GetByIdEmployeeGateway } from "../Gateway/GetByIDEmployee.Gateway";

@Injectable({
    providedIn: 'root'
})


export class GetByIdEmployeeUseCases{
    constructor(
        private _employeeByIdGateway: GetByIdEmployeeGateway
        ) {}
    
    getEmployeeById (id: number) : Observable <Employee> {
        return this._employeeByIdGateway.getAllById(id);
    }
}