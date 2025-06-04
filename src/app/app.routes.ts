import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    {path:'login-user',component:Login},
        {path:'register',component:Register},
        {path:'',redirectTo:'login-user',pathMatch:'full'}

];
