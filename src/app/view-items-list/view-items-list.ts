import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items-list',
  imports: [FormsModule],
  templateUrl: './view-items-list.html',
  styleUrl: './view-items-list.css'
})
export class ViewItemsList {

  items = {
    poha : '',
    idli : '',
    samosa : '',
    kachori : ''
  }
  
 constructor(private router: Router) {}
  currentTime: string = new Date().toLocaleString();

  takeOrder(){
    console.log('Your Order Received Succesfully.!',this.items);
    this.router.navigate(['/login-user']);
    alert('Order Received..!');
  }


}
