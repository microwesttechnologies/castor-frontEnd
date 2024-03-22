import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee.Model';

export abstract class UpdateEmployeeGateway {
    abstract updateEmployee(id: number, updatedEmployeeData: Employee): Observable<any>;
}
