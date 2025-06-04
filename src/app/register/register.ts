import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
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
