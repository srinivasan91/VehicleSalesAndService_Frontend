import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'list-vehicle', component: VehiclesComponent},
  {path: 'list-employee', component: EmployeesComponent},
  {path: 'list-sales', component: SalesComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
