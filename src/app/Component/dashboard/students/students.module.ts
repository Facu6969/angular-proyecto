import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AlumnoService } from './alumno.service';
import { SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    StudentsComponent,
    AlumnoListComponent,
    AlumnoFormComponent,

  ],
  exports: [
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AlumnoService
  ]
})
export class StudentsModule { }