import { Observable } from "rxjs";
import { Employee } from "../Model/Employee.Model";

export abstract class CreateEmployeeGateway {
    abstract create(employeee: Employee): Observable<Object>;
}