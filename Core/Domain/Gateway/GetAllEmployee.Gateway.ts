import { Observable } from "rxjs";
import { Employee } from "../Model/Employee.Model";

export abstract class GetAllEmployeeGateway {
    abstract getAll(): Observable<Array<Employee>>;
}