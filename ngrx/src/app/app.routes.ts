import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Home } from './home/home';
import { Crud } from './crud/crud';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'crud', component: Crud },
];
