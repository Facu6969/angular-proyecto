import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';

const routes: Routes = [
  { path: '', component: StudentsComponent,
     children: [
      { path: 'form', component: AlumnoFormComponent },
      { path: 'list', component: AlumnoListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
