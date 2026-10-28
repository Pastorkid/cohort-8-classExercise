import { Routes } from '@angular/router';
import { DashboardHome } from './dashboard-home/dashboard-home';
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';
import { Dashboard } from './dashboard';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'dashboardHome', component: DashboardHome },
      { path: 'profile', component: Profile },
      { path: 'settings', component: Settings },
    ],
  },
];
