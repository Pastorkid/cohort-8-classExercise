import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { authGuard } from './guards/auth-guard';
import { loginAuthGuard } from './guards/login-auth-guard';

export const routes: Routes = [
  { path: '', component: Login, canActivate: [loginAuthGuard] },
  { path: 'home', component: Home, canActivate: [authGuard] },
];
