import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clients } from '../clients';
import { Router } from '@angular/router';

export interface userRegistraion{
   username:string,
   name:string,
   password:string,
   surname:string
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './register.html',
  providers: [Clients],
  styleUrls: ['./register.css']
})
export class Register {
    constructor(private router: Router, private client: Clients) {} // Corrected `clinent` to `client`

  user : userRegistraion = {
    username: '',
    name: '',
    surname: '',
    password: ''
  };

  registerUser() {

    this.client.registerUser(this.user).subscribe(
      response => {
        console.log("Register successful", response);
        alert('Registration Id Is' + response.message);
        this.router.navigate(['/login-user']);  
      }
    );
  }
}
