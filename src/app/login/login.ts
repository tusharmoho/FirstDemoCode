import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Clients } from '../clients';
import { HttpClientModule } from '@angular/common/http';

export interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.html',
  providers: [Clients],
  styleUrls: ['./login.css'] 
})
export class Login {

  login: LoginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private client: Clients) {} // Corrected `clinent` to `client`

  message() {
    this.client.loginCheck(this.login).subscribe(
      response => {
        console.log("Login successful", response);
        alert('Login Successfully Done..!' + response.message);
        this.router.navigate(['/snack']);  
      }
    );
  }
}
