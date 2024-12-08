import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', loadComponent: () => import('./parent/parent.component').then((c) => c.ParentComponent) },
  { path: '**', redirectTo: 'parent' }
];
