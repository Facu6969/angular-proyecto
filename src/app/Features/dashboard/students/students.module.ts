import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { AlumnoService } from '../../../core/services/alumno.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/utils/shared.module';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';

@NgModule({
  declarations: [
    StudentsComponent,
    AlumnoListComponent,
    AlumnoFormComponent

  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [
    AlumnoService
  ]
})
export class StudentsModule { }
