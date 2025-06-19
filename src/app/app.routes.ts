import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { App } from './app';
import { ViewItemsList } from './view-items-list/view-items-list';
import { ListLogin } from './list-login/list-login';
import { ViewUser } from './view-user/view-user';

export const routes: Routes = [
  { path: 'login-user', component: Login },
  { path: 'register', component: Register },
  { path: 'snack', component: ViewItemsList },
   { path: 'list-login', component: ListLogin },
   { path: 'view-user', component: ViewUser } ,// or loadComponent if lazy-loading


  { path: '', component:App } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule {}
