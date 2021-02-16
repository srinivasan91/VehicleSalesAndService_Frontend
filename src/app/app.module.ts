import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SalesComponent } from './sales/sales.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AuthenticateService } from 'service/authenticate.service';
import { HttpIntercepterService } from 'service/http-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    EmployeesComponent,
    VehiclesComponent,
    SalesComponent,
    AddCustomerComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    AuthenticateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
