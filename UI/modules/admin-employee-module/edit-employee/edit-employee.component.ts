import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetByIdEmployeeUseCases } from 'Core/Domain/UseCase/GetAllByIdEmployeeUseCase';
import { UpdateEmployeeUseCases } from 'Core/Domain/UseCase/UpdateEmployeeUseCase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'Core/Domain/Model/Employee.Model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() changeVisible = new EventEmitter<boolean>();
  @Input() idEmployee: any;
  nameEmployee!: string;
  IdentificationCard!: number;
  Picture!: string;
  DateOfAdmission!: string;
  Cargo!: number;
  State!: string;
  formUpdate!: FormGroup;

  constructor(
    private _getByIdEmployee: GetByIdEmployeeUseCases,
    private _updateEmployee: UpdateEmployeeUseCases,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadEmployeeData();
    this.formUpdate = this.formBuilder.group({
      picture: [''],
      name: ['', Validators.required],
      identificationCard: ['', Validators.required],
      dateOfAdmission: ['', Validators.required],
      cargo: ['', Validators.required],
      state: ['']
    });
  }

  loadEmployeeData() {
    if (this.idEmployee) {
      this._getByIdEmployee.getEmployeeById(this.idEmployee).subscribe(
        (employee: Employee | null) => {
          if (employee) {
            this.formUpdate.patchValue({
              name: employee.name,
              identificationCard: employee.identificationCard,
              picture: employee.picture,
              dateOfAdmission: employee.dateOfAdmission,
              cargo: employee.cargo,
              state: employee.state
            });
          }
        },
        (error) => {
          console.error('Error al cargar datos del empleado:', error);
        }
      );
    }
  }
  
  

  updateEmployeeData() {
    const updatedEmployee: Employee = {
      id: this.idEmployee,
      name: this.formUpdate.value.name,
      identificationCard: this.formUpdate.value.identificationCard,
      picture: this.formUpdate.value.picture,
      dateOfAdmission: this.formUpdate.value.dateOfAdmission,
      cargo: this.formUpdate.value.cargo,
      state: this.formUpdate.value.state
    };
  
    this._updateEmployee.updateEmployee(this.idEmployee, updatedEmployee).subscribe(
      () => {
        Swal.fire({
          title: "Actualización exitosa!",
          text: "El empleado ha sido actualizado exitosamente",
          icon: "success"
        }).then((result) => {
          if (result) {
            this.onDialogHide();
          }
        });
      },
      (error) => {
        Swal.fire({
          title: "Error al actualizar empleado",
          text: "Hubo un error al actualizar el empleado. Por favor, inténtalo de nuevo.",
          icon: "error",
          customClass: {
            container: 'custom-sweetalert-container'
          }
        }).then((result) => {
          if (result) {
            this.onDialogHide();
          }
        });
      }
    );
  }
  

  onDialogHide() {
    this.visible = false;
    this.changeVisible.emit(this.visible);
  }
}
