import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Clients } from '../clients';
import { LoginDataList } from '../list-login/list-login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-user',
  standalone: true,
  templateUrl: './view-user.html',
  styleUrls: ['./view-user.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [Clients]
})
export class ViewUser implements OnInit {

  data: LoginDataList = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private client: Clients,
    private route: ActivatedRoute
  ) {}

 ngOnInit(): void {
  const userId = this.route.snapshot.queryParamMap.get('password');
  console.log('Received userId (password):', userId);

  if (userId) {
    this.viewUser(userId);
  }
}


  viewUser(passwordNew: string): void {
    this.client.viewUser(passwordNew).subscribe(
      response => {
        console.log('User found:', response);
        this.data = response;
      },
      error => {
        console.error('Error fetching user:', error);
        alert('Failed to load user data.');
      }
    );
  }
}
