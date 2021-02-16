import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'model/customer';
import { CustomerService } from './customer.service';
import { map } from 'rxjs/operators'


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  

  url = "http://localhost:8080";

  customers: Customer[];
  login_bool: boolean = false;

  constructor(private customerService: CustomerService, private http: HttpClient) { }

  public getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  public getAuthenticatedToken() {
    if (this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    } 
  }

  public isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  public logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  validLogin(useremail, password){
    console.log('user : ', useremail)
    console.log('password : ', password)
    console.log(`${this.url}/authenticate`)
    return this.http.post<any>(`${this.url}/authenticate`, {
      useremail,
      password
    }, {
      responseType: 'text' as 'json'
    })
    .pipe(map((data) => {
      console.log("after login")
      console.log(data)
        sessionStorage.setItem(AUTHENTICATED_USER, useremail)
        sessionStorage.setItem(TOKEN, `Bearer ${data}`)
        console.log(data)
        return data
      }),
    )
  }
}
