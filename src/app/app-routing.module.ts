import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'; 

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'dashboard',
    canActivate: [AuthGuard], 
    data: { role: 'Admin' },  // Solo los usuarios con el rol "Admin" pueden acceder
    loadChildren: () => import('./Features/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
