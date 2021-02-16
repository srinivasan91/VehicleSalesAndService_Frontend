import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'model/customer';
import { CustomerService } from 'service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  showErrorMessage: boolean;

  public customer: Customer;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  signUp(customer: Customer){
    this.customerService.signUp(customer)
      .subscribe(
        res => {
          console.log(res);
          this.showSuccessMessage = true;
          this.customer.firstname="",
          this.customer.lastname="",
          this.customer.email="",
          this.customer.phone="",
          this.customer.password=""
          setTimeout(() => this.showSuccessMessage=false, 1500);

          this.router.navigate(['login'])
        },

        err => {
          console.log("Error Response : ", err)
            this.showErrorMessage = true;
            this.customer.firstname="",
            this.customer.lastname="",
            this.customer.email="",
            this.customer.phone="",
            this.customer.password=""
            this.serverErrorMessages = 'Something went wrong, Please contact admin';
            setTimeout(()=>this.showErrorMessage=false, 1500);
        }
      );
  }

}
