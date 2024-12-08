import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', loadComponent: () => import('./add/add.component').then((c) => c.AddComponent) },
  { path: 'print', loadComponent: () => import('./print/print.component').then((c) => c.PrintComponent) },
  { path: '**', redirectTo: 'add' }
];
