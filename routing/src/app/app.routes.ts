import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Dashboard } from './dashboard/dashboard';
import { DashboardHome } from './dashboard/dashboard-home/dashboard-home';
import { Profile } from './dashboard/profile/profile';
import { Settings } from './dashboard/settings/settings';
import { Login } from './login/login';
import { authGuard } from './guards/auth-guard';
import { dashChildGuard } from './guards/dash-child-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { dashboardMatchGuard } from './guards/dashboard-match-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact, canDeactivate: [unsavedChangesGuard] },
  { path: 'products', component: Products, canActivate: [authGuard] },
  { path: 'product-details/:id', component: ProductDetails },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    component: Dashboard,
    canMatch: [dashboardMatchGuard],
    canActivateChild: [dashChildGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'dashboardHome', component: DashboardHome },
      { path: 'profile', component: Profile },
      { path: 'settings', component: Settings },
    ],
  },
];
