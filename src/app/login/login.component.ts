import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'model/login';
import { AuthenticateService } from 'service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public ismyTextFieldType: boolean;
  public eye: string;
  invalidLogin: boolean;
  login: Login;
  // public users: User[];
  email: string;
  message: string;

  constructor(private authenticateService: AuthenticateService, private route: Router) { }

  ngOnInit(): void {
    this.login = new Login();
    this.eye = 'fas fa-eye-slash';
  }

  eyeOpen() {
    this.ismyTextFieldType = true;
    this.eye = 'fa fa-eye';
  }

  eyeClose() {
    this.ismyTextFieldType= false;
    this.eye= 'fas fa-eye-slash';
  }

  authLogin(user: Login){
    console.log(user.useremail);
    this.authenticateService.validLogin(user.useremail, user.password)
      .subscribe(
        data => {
          console.log(data);
          this.route.navigate(["list-vehicle"]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.message="Please try again"
          this.invalidLogin = true;
        }
      )
  }

}
