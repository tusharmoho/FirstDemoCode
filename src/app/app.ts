import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HttpClientModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Swiggy';

   message() {
    alert('Login Success...');
  }
}
