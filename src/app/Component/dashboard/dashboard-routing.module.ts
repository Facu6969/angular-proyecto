import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
    { path: 'inscripciones', loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule) },
    { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }
  ]}
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
