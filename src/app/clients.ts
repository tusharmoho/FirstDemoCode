import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from './login/login';


interface LoginResponse {
  message: string;}
@Injectable({
  providedIn: 'root'
})
export class Clients {

  constructor(private http: HttpClient) { }


loginCheck(data: LoginData) {
  return this.http.post<LoginResponse>('http://localhost:9098/login-service/login-check', data);
}

}
