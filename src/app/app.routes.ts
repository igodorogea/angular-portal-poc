import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'page-1',
    loadComponent: () =>
      import('./page-1.component').then((m) => m.Page1Component),
  },
];
