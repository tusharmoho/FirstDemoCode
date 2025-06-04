import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  login ={
    username : '',
    password : ''
  }

  constructor(private router: Router) {}
  message(){
    console.log("Done ",this.login);
      this.router.navigate(['/snack']);  
    alert('Login Successfully Done..!');
  
  }

}
