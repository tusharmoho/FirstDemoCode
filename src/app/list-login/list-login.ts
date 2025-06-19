import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter-pipe';

export interface LoginDataList {
  username: string;
  password: string;
}

@Component({
  selector: 'app-list-login',
  standalone: true,
  templateUrl: './list-login.html',
  styleUrl: './list-login.css',
  imports: [FormsModule, HttpClientModule, CommonModule, FilterPipe],
  providers: [Clients]
})
export class ListLogin implements OnInit {
  data: LoginDataList[] = [];
  searchText: string = '';

  pageSize = 5;
  currentPage = 1;

  constructor(private client: Clients, private router: Router) {}

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.client.listUser().subscribe(
      (response: LoginDataList[]) => {
        this.data = response;
        console.log('Login successful', response);
      },
      error => {
        console.error('Login failed', error);
        alert('Login failed. Please try again.');
      }
    );
  }

  onRowClick(password: string): void {
    this.router.navigate(['/view-user'], { queryParams: { password: password} });
 
  }

  get paginatedData(): LoginDataList[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  goToFirstPage(): void {
    this.currentPage = 1;
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToLastPage(): void {
    this.currentPage = this.totalPages;
  }
}
