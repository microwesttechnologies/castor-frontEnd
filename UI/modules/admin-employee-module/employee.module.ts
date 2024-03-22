import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ManagerEmployeeComponent } from './manager-employee/manager-employee.component';
import { ComponentsModule } from 'UI/components/components.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { HttpClientModule } from '@angular/common/http';
import { GetAllEmployeeGateway } from 'Core/Domain/Gateway/GetAllEmployee.Gateway';
import { GetAllEmployeeService } from 'Core/Infraestructura/driver-adapter/Services/GetAllEmployee.service';
import { GetByIdEmployeeGateway } from 'Core/Domain/Gateway/GetByIDEmployee.Gateway';
import { GetByIdEmployeeService } from 'Core/Infraestructura/driver-adapter/Services/GetAllByIdEmployee.service';
import { CreateEmployeeGateway } from 'Core/Domain/Gateway/CreateEmployee.Gateway';
import { CreateEmployeeService } from 'Core/Infraestructura/driver-adapter/Services/CreateEmployee.service copy';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { UpdateEmployeeGateway } from 'Core/Domain/Gateway/UpdateDEmployee.Gateway ';
import { UpdateEmployeeService } from 'Core/Infraestructura/driver-adapter/Services/UpdateEmployee.service';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UploadImageGateway } from 'Core/Domain/Gateway/UploadImageGateway';
import { UploadImageService } from 'Core/Infraestructura/driver-adapter/Services/UploadImage.service';

@NgModule({
  declarations: [CreateEmployeeComponent, ManagerEmployeeComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    InputSwitchModule,
    HttpClientModule, 
    ReactiveFormsModule,
    ImageModule,
    FileUploadModule,
    ToastModule

  ],
  exports: [CreateEmployeeComponent, ManagerEmployeeComponent, EditEmployeeComponent],
  providers: [ 
    {provide: GetAllEmployeeGateway, useClass: GetAllEmployeeService},
    {provide: GetByIdEmployeeGateway, useClass: GetByIdEmployeeService},
    {provide: CreateEmployeeGateway, useClass: CreateEmployeeService},
    {provide: UpdateEmployeeGateway, useClass: UpdateEmployeeService},
    {provide: MessageService},
    {provide: UploadImageGateway, useClass: UploadImageService},
  ],
})
export class EmployeeModule {}
