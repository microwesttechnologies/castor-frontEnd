import { Observable } from "rxjs";
import { Employee } from "../Model/Employee.Model";

export abstract class GetByIdEmployeeGateway {
    abstract getAllById(id: number): Observable<Employee>;
}