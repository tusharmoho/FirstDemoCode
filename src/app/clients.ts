import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from './login/login';
import { userRegistraion } from './register/register';
import { LoginDataList } from './list-login/list-login';
import { Observable } from 'rxjs';


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
registerUser(data :userRegistraion){
return this.http.post<LoginResponse>('http://localhost:9098/register-service/register-user', data);
}

listUser(): Observable<LoginDataList[]> {
  return this.http.get<LoginDataList[]>('http://localhost:9098/login-service/login-list');
}

viewUser(data :string){
return this.http.get<LoginDataList>('http://localhost:9098/login-service/login-data?username= '+ data);
}
}
