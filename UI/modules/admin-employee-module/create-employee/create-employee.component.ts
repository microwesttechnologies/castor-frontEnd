
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadImageGateway } from 'Core/Domain/Gateway/UploadImageGateway';
import { CreateEmployeeUseCases } from 'Core/Domain/UseCase/CreateEmployeeUseCase';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateEmployeeComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() changeVisible = new EventEmitter<boolean>();
  nameEmployee: string = '';
  IdentificationCard: number = 0;
  Picture: string = '';
  DateOfAdmission: string = '';
  Cargo: string = '';
  State: string = '';
  formCreate!: FormGroup;
  routeImage: string = '/UI/assets/img/';

  constructor(
    private _createEmployeeUseCase: CreateEmployeeUseCases,
    private formBuilder: FormBuilder,
    private uploadImageGateway: UploadImageGateway,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.formCreate = this.formBuilder.group({
      picture: [''],
      name: ['', Validators.required],
      identificationCard: ['', Validators.required],
      dateOfAdmission: ['', Validators.required],
      cargo: ['', Validators.required],
      state: [''],
    });
  }

  onUpload(event: any) {
    if (event.files.length === 0) {
      return;
    }

    const file: File = event.files[0];
    this.Picture = this.routeImage+file.name;
    this.messageService.add({ severity: 'success', summary: 'Perfecto!', detail: 'Imagen cargada exitosamente!!' });
  }

  uploadFile(file: File, employeeId: number): void {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.uploadImageGateway.uploadImage(employeeId, file).subscribe(
      (response) => {
        console.log('Archivo subido correctamente:', response);
      },
      (error) => {
        console.error('Error al subir el archivo:', error);
      }
    );
  }

  

  onDialogHide() {
    this.visible = false;
    this.changeVisible.emit(this.visible);
  }

  showDialog() {
    this.visible = !this.visible;
    this.changeVisible.emit(this.visible);
  }

  createEmployee() {
    if (this.formCreate.valid) {
      const newEmployee = {
        identificationCard: this.formCreate.value.identificationCard,
        name: this.formCreate.value.name,
        picture: this.Picture,
        dateOfAdmission: this.formCreate.value.dateOfAdmission,
        cargo: parseInt(this.formCreate.value.cargo),
        state: this.formCreate.value.state,
      };

      this._createEmployeeUseCase.createEmployee(newEmployee).subscribe(
        (response: any) => {
          Swal.fire({
            title: 'Creación exitosa!',
            text:
              'El empleado queda asignado con el ID: ' +
              JSON.stringify(response),
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              this.onDialogHide();
            }
          });
        },
        () => {
          Swal.fire({
            title: 'Cargue Fallido!',
            text: 'Error en el sistema, no permite la creación del empleado',
            icon: 'error',
            customClass: {
              container: 'custom-sweetalert-container',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.onDialogHide();
            }
          });
        }
      );
    }
  }

  isFormValid(): boolean {
    return this.formCreate.valid;
  }
}
