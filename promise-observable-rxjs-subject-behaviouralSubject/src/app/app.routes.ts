import { Routes } from '@angular/router';

import { Products } from './products/products';
import { RxjsPromiseExmaple } from './rxjs-promise-exmaple/rxjs-promise-exmaple';


export const routes: Routes = [
  { path: '', component: Products },
  { path: 'products', component: Products },
  { path: 'rxjs-promise-example', component:RxjsPromiseExmaple },
];