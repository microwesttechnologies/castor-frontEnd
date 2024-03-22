import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'Core/Domain/Model/Employee.Model';
import { GetEmployeeUseCases } from 'Core/Domain/UseCase/GetAllEmployeeUseCase';

@Component({
  selector: 'app-manager-employee',
  templateUrl: './manager-employee.component.html',
  styleUrls: ['./manager-employee.component.scss'],
})
export class ManagerEmployeeComponent implements OnInit {
  @Output() changeVisible = new EventEmitter<boolean>();
  labelBtn: string = 'Crear Empleado';
  visibleCreate: boolean = false;
  visibleEdit: boolean = false;
  employees: Array<Employee> = [];
  response: any;
  showEditColumn: boolean = true;
  employeeData: any;

  columns = [
    { field: 'id', name: 'N°', type: 'string', isSortable: true },
    { field: 'name', name: 'Nombre Completo', type: 'string', isSortable: true },
    { field: 'cargo', name: 'Cargo', type: 'string', isSortable: true },
    { field: 'dateOfAdmission', name: 'Fecha de ingreso', type: 'string', isSortable: true },
    { field: 'state', name: 'Estado', type: 'string', isSortable: true },
  ];
  
  openEditView(employeeData: any) {
    this.visibleEdit = true;
    this.employeeData = employeeData;
    console.log(employeeData);
  }

  showDialogCreate() {
    this.visibleCreate = true;
    this.changeVisible.emit(this.visibleCreate);
  }

  // showDialogEdit() {
  //   this.visibleEdit = true;
  //   this.changeVisible.emit(this.visibleEdit);
  // }

  onCreateEmployeeVisibilityChange(visibleCreate: boolean) {
    this.visibleCreate = visibleCreate;
  }

  onEditEmployeeVisibilityChange(visibleEdit: boolean) {
    this.visibleEdit = visibleEdit;
  }

  getAllEmployee() {
    this.response = this._getAllEmployeeUseCase.getAllEmployee()
    .subscribe(
      data => {
        this.employees = data;
      }
    );
  }
  



  constructor(private _getAllEmployeeUseCase: GetEmployeeUseCases) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }
}
