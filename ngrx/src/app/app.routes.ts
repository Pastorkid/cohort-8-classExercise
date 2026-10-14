import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'products', component: Products },
];
