import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  token = sessionStorage.getItem('token');

  url = "http://localhost:8080";

  headers_object = new HttpHeaders().set("Authorization",  this.token);

  httpOptions = {
    headers: this.headers_object
  };

  constructor(private http: HttpClient) { }

  signUp(customer: Customer){
    return this.http.post(this.url+"/customer",customer);
  }
}
