import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from 'UI/modules/admin-employee-module/create-employee/create-employee.component';
import { ManagerEmployeeComponent } from 'UI/modules/admin-employee-module/manager-employee/manager-employee.component';

const routes: Routes = [
  { path: 'create-employee', component: CreateEmployeeComponent }, 
  { path: 'admin-employee', component: ManagerEmployeeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
