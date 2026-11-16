import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Crud } from './crud/crud';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'crud', component: Crud },
];
