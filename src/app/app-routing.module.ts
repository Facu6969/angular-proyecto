import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { CursosComponent } from './Component/dashboard/cursos/cursos.component';
import { InscripcionesComponent } from './Component/dashboard/inscripciones/inscripciones.component';
import { StudentsComponent } from './Component/dashboard/students/students.component';
import { AuthComponent } from './Component/auth/auth.component';
import { AlumnoFormComponent } from './Component/dashboard/students/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './Component/dashboard/students/alumno-list/alumno-list.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'cursos',
        component: CursosComponent
      },

      {
        path: 'inscripciones',
        component: InscripcionesComponent
      },

      { path: 'students', component: StudentsComponent, children: [
        { path: 'form', component: AlumnoFormComponent },
        { path: 'list', component: AlumnoListComponent }
      ]
    }
    ]
  },

  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
