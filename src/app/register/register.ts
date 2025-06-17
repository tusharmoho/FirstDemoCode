import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clients } from '../clients';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './register.html',
  providers: [Clients],
  styleUrls: ['./register.css']
})
export class Register {
  user = {
    username: '',
    name: '',
    surname: '',
    password: ''
  };

  registerUser() {
    console.log('Registered User:', this.user);
    alert('Register Successful!');
  }
}
